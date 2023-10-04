import {
  ActionEventArgs,
  ColumnDirective,
  ColumnsDirective,
  DialogEditEventArgs,
  Edit,
  EditSettingsModel,
  Filter,
  FilterSettingsModel,
  GridComponent,
  Inject,
  LoadingIndicatorModel,
  Page,
  PageSettingsModel,
  Resize,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { ButtonComponent, FabComponent } from "@syncfusion/ej2-react-buttons";
import { useClientes } from "../api/getClientes";
import { DataManager, RemoteSaveAdaptor } from "@syncfusion/ej2-data";
import { getToken } from "@/libs/axios";
import { API_URL } from "@/config";
import { ICliente, IClienteDialog, IClienteRequest } from "../types";
import { DialogFormTemplate } from "./DialogFormTemplate";
import { useRef, useState } from "react";
import {
  FormValidator,
  TextBoxComponent,
  ValidArgs,
} from "@syncfusion/ej2-react-inputs";
import { useQueryClient } from "@tanstack/react-query";
import LoadingOverlay from "react-loading-overlay-ts";
import { formatStringRequest } from "@/utils/format";

export const ClientesList = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isFetching } = useClientes(searchValue);
  const queryClient = useQueryClient();

  // Config datagrid
  const dataSource = new DataManager({
    adaptor: new RemoteSaveAdaptor(),
    json: data,
    insertUrl: API_URL + "/api/insertarClientes",
    removeUrl: API_URL + "/api/eliminarCliente",
    updateUrl: API_URL + "/api/actualizarClientes",
    headers: [{ Authorization: getToken() }],
  });
  const gridInstance = useRef<GridComponent | null>(null);
  const pageSettings: PageSettingsModel = { pageSize: 10 };
  const loadingIndicator: LoadingIndicatorModel = { indicatorType: "Shimmer" };
  const filterSettings: FilterSettingsModel = { type: "Excel" };
  const toolbarOptions: string[] = ["Edit", "Delete"];
  const editOptions: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    mode: "Dialog",
    showConfirmDialog: true,
    showDeleteConfirmDialog: true,
    dialog: {
      params: {
        height: 500,
        width: 500,
      },
    },
    template: dialogTemplate,
    newRowPosition: "Bottom",
  };

  function dialogTemplate(props: IClienteDialog) {
    return <DialogFormTemplate {...props} />;
  }

  function flgRetTemplate(props: { flg_ret: boolean }) {
    if (props.flg_ret) {
      return "Si";
    } else {
      return "No";
    }
  }

  function flgRelTemplate(props: { flg_rel: boolean }) {
    if (props.flg_rel) {
      return "Si";
    } else {
      return "No";
    }
  }

  const handleAddClick = () => {
    gridInstance.current?.addRecord();
  };

  const dataBound = () => {
    if (gridInstance.current) {
      gridInstance.current.autoFitColumns();
    }
  };

  const actionBegin = (args: ActionEventArgs) => {
    if (args.requestType === "save" && args.form) {
      // create request body
      const formData = args.data as ICliente;
      const formatData: IClienteRequest = {
        id_aux: formData.id_aux ?? null,
        id_tipoaux: 1,
        ubigeo: formData.ubigeo,
        des_aux: formData.des_aux,
        ruc_aux: formData.ruc_aux,
        tdoc_ide: formData.tdoc_ide,
        tipo_pers: formData.tipo_pers,
        dir_legal: formData.dir_legal,
        id_zona: formData.id_zona ?? null,
        id_pais: formData.id_pais ?? null,
        telefono: formatStringRequest(formData.telefono),
        fax: formatStringRequest(formData.fax),
        email: formatStringRequest(formData.email),
        web: formatStringRequest(formData.web),
        id_ven: formData.id_ven,
        id_canal: formData.id_canal,
        flagcorp: formData.flagcorp ?? false,
        flg_corp: formData.flg_corp ?? false,
        id_corp: formData.id_corp ?? null,
        mone_lcre: formatStringRequest(formData.mone_lcre),
        mont_lcre: formData.mont_lcre ?? null,
        flg_rel: formData.flg_rel ?? false,
        codcta_rel: formatStringRequest(formData.codcta_rel),
        departamento: formatStringRequest(formData.departamento),
        provincia: formatStringRequest(formData.provincia),
        distrito: formatStringRequest(formData.distrito),
        flg_ret: formData.flg_ret ?? false,
        for_pago: formData.for_pago ?? null,
        sede: formatStringRequest(formData.sede),
      };
      args.data = formatData;
    }
  };

  // Rules
  // referencia: https://ej2.syncfusion.com/react/documentation/form-validator/validation-rules
  const custmoRequiredValidation = (args: ValidArgs): boolean => {
    const trimmedValue = args.value.trim();
    const isEmpty = !trimmedValue.length;
    const isNull = trimmedValue == null;
    return !isNull && !isEmpty;
  };
  const requiredRules: object = {
    required: [custmoRequiredValidation, "This field is required."],
  };
  const desAuxRules: object = { ...requiredRules, maxLength: 100 };
  const rucAuxRules: object = { ...requiredRules, maxLength: 15 };
  const dirLegalRules: object = {
    ...requiredRules,
    maxLength: 150,
  };
  const emailRules: object = { email: true };
  const montoRules: object = { min: 0 };

  const actionComplete = (args: DialogEditEventArgs) => {
    if (args.requestType === "save" || args.requestType === "delete") {
      queryClient.invalidateQueries(["clientes", searchValue]);
    }

    if (args.requestType === "beginEdit" || args.requestType === "add") {
      // change the header of the dialog
      const dialog = args.dialog;
      const selectedRow = args.rowData as ICliente;
      dialog!.header =
        args.requestType === "beginEdit"
          ? "Editar Cliente " + selectedRow.id_aux
          : "Nuevo Cliente";

      // Add Validation Rules form additionial fields
      const htmlForm = (args.form as HTMLFormElement)
        .ej2_instances[0] as FormValidator;
      htmlForm.addRules("id_departamento", requiredRules);
      htmlForm.addRules("id_provincia", requiredRules);
      htmlForm.addRules("canal_backup", requiredRules);
      htmlForm.addRules("id_canal", requiredRules);
      htmlForm.addRules("id_pais", requiredRules);
      htmlForm.addRules("ruc_aux", rucAuxRules);
      htmlForm.addRules("des_aux", desAuxRules);
      htmlForm.addRules("dir_legal", dirLegalRules);
      htmlForm.addRules("email", emailRules);
      htmlForm.addRules("mont_lcre", montoRules);
      htmlForm.addRules("ubigeo", requiredRules);
      htmlForm.addRules("tdoc_ide", requiredRules);
      htmlForm.addRules("tipo_pers", requiredRules);
      htmlForm.addRules("id_ven", requiredRules);

      const ctaRelDependsOnFlgRel = (args: ValidArgs) => {
        const flgRelElement = htmlForm.element.querySelector(
          "#flg_rel"
        ) as HTMLFormElement;
        const flgRelInstance = flgRelElement.ej2_instances[0];
        if (flgRelInstance.checked) {
          return args.value.trim().length > 0;
        } else {
          return true;
        }
      };
      htmlForm.addRules("codcta_rel", {
        required: [ctaRelDependsOnFlgRel, "This field is required."],
      });
    }
  };

  // Search
  const customMinLength = (args: ValidArgs) => {
    return args.value.trim().length >= 3;
  };
  const onSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      rules: {
        "id-search": {
          required: true,
          minLength: [customMinLength, "Please enter at least 3 characters."],
        },
      },
    };
    const formObject = new FormValidator("#form-search", options);
    if (formObject.validate()) {
      setSearchValue((formObject.element[0] as HTMLFormElement).value);
    }
  };

  return (
    <LoadingOverlay
      active={isFetching}
      spinner
      styles={{
        overlay: (base: any) => ({
          ...base,
          "z-index": "999999",
        }),
      }}
    >
      <div className="h-screen p-2">
        <form id="form-search" onSubmit={onSubmitSearch} className="mb-6">
          <div className="mb-2 flex flex-wrap">
            <div className="mb-6 w-full md:mb-0 md:w-1/2">
              <TextBoxComponent
                id="id-search"
                value={searchValue}
                placeholder="Buscar Clientes"
                floatLabelType="Always"
                name="id-search"
                cssClass="e-outline"
                showClearButton={true}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ButtonComponent
              cssClass="e-primary"
              iconCss="e-icons e-search"
              iconPosition="Right"
            >
              Buscar
            </ButtonComponent>
          </div>
        </form>
        <GridComponent
          id="grid"
          dataSource={dataSource}
          ref={(grid) => (gridInstance.current = grid)}
          allowResizing={true}
          allowPaging={true}
          allowSorting={true}
          allowFiltering={true}
          editSettings={editOptions}
          filterSettings={filterSettings}
          pageSettings={pageSettings}
          toolbar={toolbarOptions}
          loadingIndicator={loadingIndicator}
          dataBound={dataBound}
          actionComplete={actionComplete}
          actionBegin={actionBegin}
        >
          <ColumnsDirective>
            <ColumnDirective field="descrip_ide" headerText="Tipo de Doc" />
            <ColumnDirective field="ruc_aux" headerText="Nro de Doc" />
            <ColumnDirective
              field="des_aux"
              headerText="Nombre o Razon Social"
            />
            <ColumnDirective
              field="fec_reg"
              headerText="Fecha"
              type="datetime"
              format="dd-MM-y"
            />
            <ColumnDirective
              field="descrip_tpopers"
              headerText="Tipo de Persona"
            />
            <ColumnDirective field="dir_legal" headerText="Direccion Legal" />
            <ColumnDirective
              field="flg_ret"
              headerText="Es cliente retenedor?"
              template={flgRetTemplate}
              type="boolean"
            />
            <ColumnDirective field="monedalcre" headerText="Moneda" />
            <ColumnDirective
              field="mont_lcre"
              headerText="Monto"
              type="number"
            />
            <ColumnDirective
              field="flg_rel"
              headerText="Es cliente relacionado?"
              template={flgRelTemplate}
              type="boolean"
            />
            <ColumnDirective field="codcta_rel" headerText="Cuenta Contable" />
            <ColumnDirective field="pais" headerText="Pais" />
            <ColumnDirective field="telefono" headerText="Telefono" />
            <ColumnDirective field="fax" headerText="Fax" />
            <ColumnDirective field="email" headerText="Email" />
            <ColumnDirective field="web" headerText="Web" />
            <ColumnDirective field="vendedor" headerText="Vendedor" />
            <ColumnDirective field="giro" headerText="Giro" type="number" />
            <ColumnDirective field="ubigeo" headerText="Ubigeo" />
            <ColumnDirective field="departamento" headerText="Departamento" />
            <ColumnDirective field="provincia" headerText="Provincia" />
            <ColumnDirective field="distrito" headerText="Distrito" />
            <ColumnDirective field="canal" headerText="Canal" />
            <ColumnDirective field="subcanal" headerText="Subcanal" />
            <ColumnDirective field="formapago" headerText="Forma de Pago" />

            {/* campos ocultos */}
            <ColumnDirective
              field="tdoc_ide"
              headerText="Tipo de Doc"
              visible={false}
            />

            <ColumnDirective
              field="id_tipoaux"
              headerText="Tipo de Auxiliar"
              type="number"
              defaultValue="1"
              visible={false}
            />

            <ColumnDirective
              field="tipo_pers"
              headerText="Tipo de Persona"
              type="number"
              visible={false}
            />

            <ColumnDirective
              field="mone_lcre"
              headerText="Moneda"
              defaultValue="1"
              visible={false}
            />

            <ColumnDirective
              field="id_aux"
              headerText="Id"
              isPrimaryKey
              type="number"
              visible={false}
            />
            <ColumnDirective
              field="flagcorp"
              headerText="Es corporacion?"
              visible={false}
              type="boolean"
            />
            <ColumnDirective
              field="id_canal"
              headerText="Canal"
              type="number"
              visible={false}
            />
            <ColumnDirective
              field="for_pago"
              headerText="Forma de Pago"
              visible={false}
            />
            <ColumnDirective
              field="id_ven"
              headerText="Vendedor"
              type="number"
              visible={false}
            />
            <ColumnDirective
              field="id_pais"
              headerText="Pais"
              type="number"
              visible={false}
            />
            <ColumnDirective
              field="flg_corp"
              headerText="Es sede de corporacion?"
              type="boolean"
              visible={false}
            />
            <ColumnDirective
              field="id_corp"
              headerText="Id Corporacion"
              type="number"
              visible={false}
            />
            <ColumnDirective field="id_distri" visible={false} type="number" />
            <ColumnDirective field="id_ciudad" visible={false} type="number" />
            <ColumnDirective field="id_region" visible={false} type="number" />
            <ColumnDirective field="id_zona" visible={false} type="number" />
            <ColumnDirective
              field="estado"
              headerText="Estado"
              type="number"
              visible={false}
            />
            <ColumnDirective field="fn" type="number" visible={false} />
            <ColumnDirective field="horentrega" visible={false} />
            <ColumnDirective field="sede" headerText="Sede" visible={false} />
            <ColumnDirective field="nivel" headerText="Nivel" visible={false} />
          </ColumnsDirective>
          <Inject services={[Resize, Page, Edit, Toolbar, Sort, Filter]} />
        </GridComponent>
        <FabComponent
          id="fab"
          title="Agregar Cliente"
          target="#grid"
          onClick={handleAddClick}
          iconCss="e-icons e-plus"
          className="mb-4"
          disabled={!data?.length}
        ></FabComponent>
      </div>
    </LoadingOverlay>
  );
};

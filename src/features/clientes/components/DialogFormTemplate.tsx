import {
  ChangeEventArgs,
  CheckBoxComponent,
} from "@syncfusion/ej2-react-buttons";
import { IClienteDialog } from "../types";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  NumericTextBoxComponent,
  TextBoxComponent,
} from "@syncfusion/ej2-react-inputs";
import { DropDownListUbigeo } from "./DropDownListUbigeo";
import { DropDownListCanal } from "./DropDownListCanal";
import { useState } from "react";
import { extend } from "@syncfusion/ej2-base";

export function DialogFormTemplate(props: IClienteDialog) {
  const [val, setval] = useState<IClienteDialog>(extend({}, {}, props, true));
  // function onChange(args: React.ChangeEvent<HTMLInputElement>): void {
  //   const key: string = args.target.name;
  //   const value: string = args.target.value;
  //   setval((prevVal) => ({ ...prevVal, [key]: value }));
  // }

  const handleOnChangeFlgRel = (e: ChangeEventArgs) => {
    setval((prevVal) => ({ ...prevVal, flg_rel: e.checked }));
  };

  const data: IClienteDialog = val;

  const documentosData = [
    {
      id: "-",
      descripcion: "S/D",
    },
    {
      id: "1",
      descripcion: "DNI",
    },
    {
      id: "2",
      descripcion: "FFPP",
    },
    {
      id: "3",
      descripcion: "FFAA",
    },
    {
      id: "4",
      descripcion: "CE",
    },
    {
      id: "6",
      descripcion: "RUC",
    },
    {
      id: "8",
      descripcion: "TAXID",
    },
  ];

  const tipoPersonaData = [
    {
      id: 1,
      descripcion: "Natural",
    },
    {
      id: 2,
      descripcion: "Juridica",
    },
    {
      id: 3,
      descripcion: "No Domiciliada",
    },
  ];

  const monedaData = [
    {
      id: "1",
      descripcion: "Soles",
    },
    {
      id: "2",
      descripcion: "Dolares",
    },
  ];

  const formaPagoData = [
    {
      forma_pago: "50% OC - 50% CONTRAENTREGA",
      for_pago: 9980,
      // codigo: null,
      dias: 0,
    },
    {
      forma_pago: "CONTADO",
      for_pago: 1,
      // codigo: "01",
      dias: 0,
    },
    {
      forma_pago: "CONTRAENTREGA",
      for_pago: 10041,
      // codigo: null,
      dias: 0,
    },
  ];

  const paisData = [
    {
      pais: "ARGENTINA",
      id_pais: 9713,
      // codigo: null,
    },
    {
      pais: "BRASIL",
      id_pais: 9768,
      // codigo: null,
    },
    {
      pais: "PERU",
      id_pais: 1200,
      // codigo: "051",
    },
  ];

  const vendedorData = [
    {
      des_aux: "ANICAMA BRAVO DE HERRERA JUDITH ELENA",
      id_aux: 1047,
    },
    {
      des_aux: "ApellidoPAT ApellidoMAT vendedor ABEL",
      id_aux: 14189,
    },
  ];

  return (
    <div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <TextBoxComponent
            id="des_aux"
            value={data.des_aux}
            placeholder="* Nombre o Razon Social"
            floatLabelType="Always"
            name="des_aux"
          />
        </div>
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3">
          <DropDownListComponent
            id="id_pais"
            value={data.id_pais}
            dataSource={paisData}
            fields={{ text: "pais", value: "id_pais" }}
            placeholder="* Pais"
            popupHeight="300px"
            floatLabelType="Always"
            name="id_pais"
          />
        </div>
        <DropDownListUbigeo ubigeo={props.ubigeo} />
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
          <DropDownListComponent
            id="tdoc_ide"
            value={data.tdoc_ide}
            dataSource={documentosData}
            fields={{ text: "descripcion", value: "id" }}
            placeholder="* Tipo de documento"
            popupHeight="300px"
            floatLabelType="Always"
            name="tdoc_ide"
          />
        </div>
        <div className="w-full px-3 md:w-2/3">
          <TextBoxComponent
            id="ruc_aux"
            value={data.ruc_aux}
            placeholder="* Numero de documento"
            floatLabelType="Always"
            name="ruc_aux"
          />
        </div>
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
          <DropDownListComponent
            id="tipo_pers"
            value={data.tipo_pers}
            dataSource={tipoPersonaData}
            fields={{ text: "descripcion", value: "id" }}
            placeholder="* Tipo de persona"
            popupHeight="300px"
            floatLabelType="Always"
            name="tipo_pers"
          />
        </div>
        <div className="w-full px-3 md:w-2/3">
          <TextBoxComponent
            id="dir_legal"
            value={data.dir_legal}
            placeholder="* Direccion legal"
            floatLabelType="Always"
            name="dir_legal"
          />
        </div>
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <TextBoxComponent
            id="telefono"
            value={data.telefono}
            placeholder="Numeros de telefono"
            floatLabelType="Always"
            name="telefono"
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <TextBoxComponent
            id="fax"
            value={data.fax}
            placeholder="Numero de fax"
            floatLabelType="Always"
            name="fax"
          />
        </div>
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <TextBoxComponent
            id="email"
            value={data.email}
            placeholder="Email"
            floatLabelType="Always"
            name="email"
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <TextBoxComponent
            id="web"
            value={data.web}
            placeholder="Direccion web"
            floatLabelType="Always"
            name="web"
          />
        </div>
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <DropDownListComponent
            id="id_ven"
            value={data.id_ven}
            dataSource={vendedorData}
            fields={{ text: "des_aux", value: "id_aux" }}
            placeholder="* Vendedor"
            popupHeight="300px"
            floatLabelType="Always"
            name="id_ven"
          />
        </div>
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap">
        <DropDownListCanal subcanal={props.id_canal} />
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <DropDownListComponent
            id="mone_lcre"
            value={data.mone_lcre}
            dataSource={monedaData}
            fields={{ text: "descripcion", value: "id" }}
            placeholder="Moneda de linea de credito"
            popupHeight="300px"
            floatLabelType="Always"
            name="mone_lcre"
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <NumericTextBoxComponent
            id="mont_lcre"
            format="0"
            value={data.mont_lcre}
            placeholder="Monto de linea de credito"
            floatLabelType="Always"
            name="mont_lcre"
          />
        </div>
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <CheckBoxComponent
            id="flg_rel"
            checked={data.flg_rel}
            label="Es cliente relacionado"
            name="flg_rel"
            change={handleOnChangeFlgRel}
          />
        </div>
        <div className={`w-full px-3 md:w-1/2 ${val.flg_rel ? "" : "hidden"}`}>
          <TextBoxComponent
            id="codcta_rel"
            value={data.codcta_rel}
            placeholder="Cuenta contable"
            floatLabelType="Always"
            name="codcta_rel"
          />
        </div>
      </div>

      <div className="-mx-3 mb-2 flex flex-wrap">
        <div className="mb-6 w-full px-3">
          <CheckBoxComponent
            id="flg_ret"
            checked={data.flg_ret}
            label="Es cliente retenedor"
            name="flg_ret"
          />
        </div>
        <div className="w-full px-3">
          <DropDownListComponent
            id="for_pago"
            value={data.for_pago}
            dataSource={formaPagoData}
            fields={{ text: "forma_pago", value: "for_pago" }}
            placeholder="Forma de pago"
            popupHeight="300px"
            floatLabelType="Always"
            name="for_pago"
          />
        </div>
      </div>

      {/* campos ocultos */}
      <div className="hidden">
        <NumericTextBoxComponent
          id="id_tipoaux"
          format="0"
          value={data.id_tipoaux}
          placeholder="Tipo de Auxiliar"
          floatLabelType="Always"
          name="id_tipoaux"
          disabled
        />

        <NumericTextBoxComponent
          id="id_aux"
          format="0"
          value={data.id_aux}
          placeholder="Id Cliente"
          floatLabelType="Always"
          name="id_aux"
          disabled
        />

        <NumericTextBoxComponent
          id="id_zona"
          format="0"
          type="number"
          value={data.id_zona}
          placeholder="Zona"
          floatLabelType="Always"
          name="id_zona"
        />

        <CheckBoxComponent
          id="flagcorp"
          checked={data.flagcorp}
          label="Es corporacion"
          name="flagcorp"
        />

        <CheckBoxComponent
          id="flg_corp"
          checked={data.flg_corp}
          label="Es sede de corporacion"
          name="flg_corp"
        />

        <NumericTextBoxComponent
          id="id_corp"
          format="0"
          value={data.id_corp}
          placeholder="Id corporacion"
          floatLabelType="Always"
          name="id_corp"
        />

        <TextBoxComponent
          id="sede"
          value={data.sede}
          placeholder="Sede"
          floatLabelType="Always"
          name="sede"
        />
      </div>
    </div>
  );
}

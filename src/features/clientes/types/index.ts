type WithoutNullableKeys<Type> = {
  [Key in keyof Type]-?: WithoutNullableKeys<NonNullable<Type[Key]>>;
};

export interface IClientesResponse {
  data: ICliente[];
}

export interface ICliente {
  canal: string | null;
  codcta_rel: string | null;
  departamento: string | null;
  des_aux: string;
  descrip_ide: string | null;
  descrip_tpopers: string | null;
  dir_legal: string;
  distrito: null | string;
  email: null | string;
  estado: number;
  fax: string | null;
  fec_reg: Date;
  flagcorp: boolean;
  flg_corp: boolean;
  flg_rel: boolean;
  flg_ret: boolean;
  fn: number | null;
  for_pago: number | null;
  formapago: string | null;
  giro: number | null;
  horentrega: null | string;
  id_aux: number;
  id_canal: number;
  id_corp: number | null;
  id_pais: number | null;
  id_tipoaux: number;
  id_ven: number;
  id_zona: number | null;
  mone_lcre: string | null;
  monedalcre: string | null;
  mont_lcre: number | null;
  nivel: null | string;
  pais: string | null;
  provincia: null | string;
  ruc_aux: string;
  sede: string | null;
  subcanal: string | null;
  tdoc_ide: string;
  telefono: null | string;
  tipo_pers: number;
  ubigeo: string;
  vendedor: string | null;
  web: null | string;
}

export interface IClienteDialog extends Partial<WithoutNullableKeys<ICliente>> {
  isAdd?: boolean;
}

export interface IClienteRequest {
  id_aux: number | null;
  id_tipoaux: number;
  ubigeo: string;
  des_aux: string;
  ruc_aux: string;
  tdoc_ide: string;
  tipo_pers: number;
  dir_legal: string;
  id_zona: number | null;
  id_pais: number | null;
  telefono: null | string;
  fax: string | null;
  email: null | string;
  web: null | string;
  id_ven: number;
  id_canal: number;
  flagcorp: boolean;
  flg_corp: boolean;
  id_corp: number | null;
  mone_lcre: string | null;
  mont_lcre: number | null;
  flg_rel: boolean;
  codcta_rel: string | null;
  departamento: string | null;
  provincia: null | string;
  distrito: null | string;
  flg_ret: boolean;
  for_pago: number | null;
  sede: string | null;
}

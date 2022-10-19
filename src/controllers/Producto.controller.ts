import { Producto } from "../model/Producto";

export const GetProductos = (): Producto[] => {
  let p: Producto[] = [];
  p.push({Codigo: 1,Nombre: "Licra",Cantidad: 17,ValorU: 1000,PrecioV: 17000,Cliente: "Tu rajon pa dentro",});
  return p;
}



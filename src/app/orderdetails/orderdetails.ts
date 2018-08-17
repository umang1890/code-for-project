export class orderdetailsclass {
  constructor(
 public  no:number,
    public dish_id: number,
    public dish_price: number,
    public dish_name: string,

    public qty:number,
    public price:number,
    public cusine_id:number,
    public fk_bill_no:number,
  ) {}
}

import { useStateValue } from "./StateProvider";

const invoice = {
  // const [{ basket, user}] = useStateValue();

  id: "5df3180a09ea16dc4b95f910",
  invoice_no: "201906-28",
  balance: "$2,283.74",
  company: "THOUGHT GREEN",
  email: "susanafuentes@thoughtgreen.com",
  phone: "+1 (872) 588-3809",
  address: "922 Campus Road, Drytown, Wisconsin, 1986",
  trans_date: "2019-09-12",
  due_date: "2019-10-12",

  items: [
    {
      sno: 1,
      desc: "Samsung 198 L 5 Star",
      qty: 2,
      rate: 17190,
    },
    {
      sno: 2,
      desc: "Acer Aspire 3 Intel Core i3-10th Gen 15.6 - inch",
      qty: 5,
      rate: 31450,
    },
    {
      sno: 3,
      desc: "ea commodo labore culpa irure",
      qty: 5,
      rate: 458.61,
    },
    {
      sno: 4,
      desc: "nisi consequat et adipisicing dolor",
      qty: 10,
      rate: 725.24,
    },
    {
      sno: 5,
      desc: "proident cillum anim elit esse",
      qty: 4,
      rate: 141.02,
    },
  ],
};
export default invoice;

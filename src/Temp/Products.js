import manganes from "./imgProducts/Manganes1.jpeg";
import manganes2 from "./imgProducts/Manganes2.jpeg";
import hematita from "./imgProducts/Hematita.jpeg";
import cobre from "./imgProducts/cobre.jpeg";
import estanho from "./imgProducts/estanho.jpeg";

export const products = [
  {
    id: 1,
    name: "Manganês (mg)",
    content: 0.42,
    operations: 5,
    rating: 3,
    value: 121,
    granulometry: 23,
    region: "Grande Belo Horizonte",
    image: manganes,
  },
  {
    id: 2,
    name: "Manganês2 (mg)",
    content: 0.47,
    operations: 5,
    rating: 3.5,
    value: 150,
    granulometry: 40,
    region: "Sul de Goiás",
    image: manganes2,
  },
  {
    id: 3,
    name: "Hematita (Fe2O3)",
    content: 0.7,
    operations: 5,
    rating: 2.5,
    value: 107,
    granulometry: 15,
    region: "Quadrilátero Ferrífero",
    image: hematita,
  },
  {
    id: 4,
    name: "Minério de cobre (Cu)",
    content: 0.3,
    operations: 1,
    rating: 1,
    value: 1000,
    granulometry: 15,
    region: "Carajás",
    image: cobre,
  },
  {
    id: 5,
    name: "Estanho (Sn)",
    content: 0.79,
    operations: 5,
    rating: 2,
    value: 1100,
    granulometry: 1,
    region: "Rondônia (norte)",
    image: estanho,
  },
];

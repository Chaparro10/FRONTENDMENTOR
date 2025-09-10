import "./App.css";
import { FormCard } from "./components/FormCard";
import { CardFront } from "./components/CardFront";
import { CardBackend } from "./components/CardBackend";
import bgMain from "./assets/bg-main-desktop.png";
import { useFormik } from "formik";

export default function App() {
  const validate = (values) => {
    const errors = {};
    // Card Number
    const digits = (values.cardNumber || "").replace(/\s+/g, "");
    if (!digits) {
      errors.cardNumber = "Requerido";
    } else if (!/^\d+$/.test(digits)) {
      errors.cardNumber = "Solo dígitos";
    } else if (digits.length !== 16) {
      errors.cardNumber = "Debe tener 16 dígitos";
    }

    // Cardholder Name
    const name = (values.cardName || "").trim();
    if (!name) errors.cardName = "Requerido";
    else if (name.length < 3) errors.cardName = "Mínimo 3 caracteres";

    // Expiry MM / YY
    const mm = parseInt(values.expMMDate, 10);
    const yy = parseInt(values.expYYDate, 10);
    if (!values.expMMDate) errors.expMMDate = "MM requerido";

    if (!values.expYYDate) errors.expYYDate = "AA requerido";
    else if (!/^\d{2}$/.test(values.expYYDate))
      errors.expYYDate = "Dos dígitos";

    // CVC
    const cvc = (values.cvc || "").trim();
    if (!/^\d{3}$/.test(cvc)) errors.cvc = "CVC 3 dígitos";

    console.log("errors", errors);

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cardName: "",
      expMMDate: "",
      expYYDate: "",
      cvc: "000",
    },
    validate,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log("AQUIIUIUIUIU");
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="app">
      <aside className="sidebar" style={{ backgroundImage: `url(${bgMain})` }}>
        <div className="cards">
          {/* Envuélvelas para poder posicionarlas sin tocar los componentes */}
          <div className="card card-front">
            <CardFront formik={formik} />
          </div>
          <div className="card card-back">
            <CardBackend cvv={formik.values.cvc} />
          </div>
        </div>
      </aside>

      <main className="content">
        <FormCard formik={formik} />
      </main>
    </div>
  );
}

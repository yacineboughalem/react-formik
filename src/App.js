import "./App.css";
import YoutubeForm from "./shared/components/Forms/Youtube";
import WithYupForm from "./shared/components/Forms/WithYup";
import GetFieldPropsForm from "./shared/components/Forms/GetFieldProps";
import FormikForm from "./shared/components/Forms/Formik";

function App() {
  return (
    <div className="App">
      {/* <YoutubeForm /> */}
      {/* <WithYupForm /> */}
      {/* <GetFieldPropsForm />  */}
      <FormikForm />
    </div>
  );
}

export default App;

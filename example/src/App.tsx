import React from "react";
import "./App.css";
import { RRuleBuilder, tranlations } from "rrule-builder";

function App() {
  const [rrule, setRrule] = React.useState("");
  return (
    <div>
      <div className="app container">
        <div className="app-header">
          <h1>RRule Builder</h1>
        </div>
        <div className="app-desc">Recurrence Rule Builder with MUI suport Language Vietnamese</div>
        <div className="pt-4">
          <RRuleBuilder
            onChange={(rrule) => {
              setRrule(rrule);
            }}
            rruleString={rrule}
            translation={tranlations.vietnamese}
          />
        </div>
      </div>
      <hr className="mt-5 mb-5" />
      <div className="container">
        <h5>
          <strong>Example handling</strong>
        </h5>

        <div className="px-3 pt-3 border rounded">
          <div className="form-group row d-flex align-items-sm-center">
            <div className="col-sm-2 text-sm-right">
              <span className="col-form-label">
                <strong>RRule</strong>
              </span>
            </div>
            <div className="col-sm-8">{rrule}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { PureComponent } from "react";
import { cloneDeep, set } from "lodash";

import Start from "./Start/index";
import Repeat from "./Repeat/index";
import End from "./End/index";
import computeRRuleToString from "../utils/computeRRule/toString/computeRRule";
import computeRRuleFromString from "../utils/computeRRule/fromString/computeRRule";
import configureInitialState from "../utils/configureInitialState";
import translateLabel from "../utils/translateLabel";
import { RRuleBootstrapProps } from "./RRuleBootstrap.types";
import "../styles/index.css";
import { RepeatDetail } from "./Repeat/Repeat.types";
import english from "./../translations/english";

class RRuleBootstrap extends PureComponent<RRuleBootstrapProps> {
  static defaultProps: RRuleBootstrapProps = {
    id: null,
    value: "",
    config: {},
    onChange() {},
    calendarComponent: null,
    translations: english,
  };

  // compute default view based on user's config
  state = configureInitialState(this.props.config, this.props.calendarComponent, this.props.id);

  componentWillMount() {
    if (this.props.onChange === RRuleBootstrap.defaultProps.onChange) {
      // no onChange() was provided
      throw new Error(
        "No onChange() function has been passed to RRuleBootstrap. \n" +
          "Please provide one, it's needed to handle generated value."
      );
    }

    if (this.props.value) {
      // if value is provided to RRuleBootstrap, it's used to compute state of component's forms
      const data = computeRRuleFromString(this.state.data, this.props.value);
      this.setState({ data });
    }
  }

  componentWillReceiveProps(nextProps: RRuleBootstrapProps) {
    if (nextProps.value) {
      const data = computeRRuleFromString(this.state.data, nextProps.value);
      this.setState({ data });
    }
  }

  handleChange = ({ target }: any) => {
    const newData = cloneDeep(this.state.data);
    set(newData, target.name, target.value);
    const rrule = computeRRuleToString(newData);
    this.setState({ data: newData });
    this.props.onChange && this.props.onChange(rrule as string);
  };

  render() {
    const {
      id,
      data: { start, repeat, end, options, error },
    } = this.state;
    return (
      <div>
        {!options.hideError && error && (
          <div className="alert alert-danger">
            {translateLabel(this.props.translations, "invalid_rrule", { value: (error as any).value })}
          </div>
        )}

        <div className="px-0 pt-3 border rounded">
          {!options.hideStart && (
            <div>
              <Start
                id={`${id}-start`}
                start={start}
                handleChange={this.handleChange}
                translations={this.props.translations}
              />
              <hr />
            </div>
          )}

          <div>
            <Repeat
              id={`${id}-repeat`}
              repeat={repeat as RepeatDetail}
              handleChange={this.handleChange}
              translations={this.props.translations}
            />
          </div>

          {!options.hideEnd && (
            <div>
              <hr />
              <End id={`${id}-end`} end={end} handleChange={this.handleChange} translations={this.props.translations} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RRuleBootstrap;

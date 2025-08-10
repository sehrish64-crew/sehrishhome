import React, { Component, createRef } from "react";
import { DateRangePicker } from "react-date-range";
import { Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface MyComponentState {
  selectionRange: Range;
  showPicker: boolean;
  inputValue: string;
}

export default class MyComponent extends Component<{}, MyComponentState> {
  wrapperRef = createRef<HTMLDivElement>();

  constructor(props: {}) {
    super(props);
    const today = new Date();
    this.state = {
      selectionRange: {
        startDate: today,
        endDate: today,
        key: "selection",
      },
      showPicker: false,
      inputValue: this.formatDateRange(today, today),
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event: MouseEvent) {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target as Node)
    ) {
      this.setState({ showPicker: false });
    }
  }

  formatDateRange(start: Date, end: Date) {
    const format = (d: Date) =>
      `${d.getFullYear()}-${(d.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
    return `${format(start)} to ${format(end)}`;
  }

  handleSelect(ranges: RangeKeyDict) {
    const range = ranges.selection;
    this.setState({
      selectionRange: range,
      inputValue: this.formatDateRange(range.startDate!, range.endDate!),
    });
  }

  render() {
    const { selectionRange, showPicker, inputValue } = this.state;

    return (
      <div className="relative inline-block" ref={this.wrapperRef}>
        {/* Input Field */}
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            readOnly
            onClick={() => this.setState({ showPicker: !showPicker })}
            className="w-[170px] border border-[#F0F0F0] pl-10 pr-10 pt-2 pb-2 rounded-lg text-sm text-[#333] cursor-pointer"
          />
          {/* Icon */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 7.42057H16.5M5.66667 4.08724V0.753906M12.3333 4.08724V0.753906M6.83333 17.4206H11.1667C13.0335 17.4206 13.9669 17.4206 14.68 17.0573C15.3072 16.7377 15.8171 16.2277 16.1367 15.6005C16.5 14.8875 16.5 13.9541 16.5 12.0872V7.75391C16.5 5.88707 16.5 4.95364 16.1367 4.2406C15.8171 3.6134 15.3072 3.10346 14.68 2.78388C13.9669 2.42057 13.0335 2.42057 11.1667 2.42057H6.83333C4.96649 2.42057 4.03307 2.42057 3.32003 2.78388C2.69282 3.10346 2.18289 3.6134 1.86331 4.2406C1.5 4.95364 1.5 5.88706 1.5 7.75391V12.0872C1.5 13.9541 1.5 14.8875 1.86331 15.6005C2.18289 16.2277 2.69282 16.7377 3.32003 17.0573C4.03307 17.4206 4.96649 17.4206 6.83333 17.4206Z"
                stroke="#606061"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Date Picker */}
        {showPicker && (
          <div className="absolute z-10 mt-2">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={this.handleSelect}
            />
          </div>
        )}
      </div>
    );
  }
}

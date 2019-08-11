import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import React from 'react';
import { DateRangePicker } from 'react-date-range';
import moment from 'moment';
import { isUndefined } from 'util';

// interface DatePickerProps {
//     initialRanges: DateRange[];
//     setRanges: (ranges: DateRange[]) => void;
// }

// interface DatePickerState {
//     ranges: DateRange[];
// }

// export interface DateRange {
//     startDate: Moment;
//     endDate: Moment;
//     key: string;
// }

// GROSS JS FILE because react-date-range types match latest stable release but using beta of module

export class DatePicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ranges: props.initialRanges };
    }

    render() {
        const derpRange = [
            // {
            //     startDate: moment(),
            //     endDate: moment().add(3, 'days'),
            //     key: 'selection'
            // }
        ];
        return <div>
            <DateRangePicker
                onChange={((ranges) => this.handleChange(ranges))}
                ranges={derpRange}
                staticRanges={[]}
                inputRanges={[]}
                showMonthAndYearPickers={false}
            />}</div>;
    }

    handleChange(selectedRange) {
        const ranges = this.state.ranges;
        let rangeOrUndefined = ranges.find((range) => range.key === selectedRange.key);
        if (isUndefined(rangeOrUndefined)) {

        } else {
            rangeOrUndefined = selectedRange;
        }
        console.error(selectedRange);
    }

}
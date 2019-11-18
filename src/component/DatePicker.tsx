import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController, toMomentObject, FocusedInputShape } from 'react-dates';
import React from 'react';
import * as moment from 'moment';

export interface DatePickerProps {
    startDateId: string;
    endDateId: string;
}

interface DatePickerState {
    startDate: moment.Moment | null;
    endDate: moment.Moment | null;
    focusedInput: FocusedInputShape | null;
}

export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {

    constructor(props: DatePickerProps) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: 'startDate'
        };
    }

    render(): JSX.Element {

        return <div>
            <DateRangePicker
                startDate={this.state.startDate}
                startDateId={this.props.startDateId}
                endDate={this.state.endDate}
                // endDate={toMomentObject('derp', 'derp')}
                endDateId={this.props.endDateId}
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            />
        </div>;
    }
}

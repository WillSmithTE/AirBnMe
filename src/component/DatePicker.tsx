import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../css/DatePicker.css';
import React from "react";
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

export class DatePicker extends React.Component<{}, any> {

    private static states = {
        available: {
            color: '#000000',
            label: 'Available'
        },
        unavailable: {
            selectable: false,
            color: '#595f69',
            label: 'Unavailable'
        }
    };

    // constructor(props: {}) {
    //     super(props);
    // }

    render(): JSX.Element {
        return <DateRangePicker
        startDate={moment()}
        startDateId='date_from'
        endDate={moment().add(7, 'days')}
        endDateId='herp'
        onDatesChange={(derp) => console.error(derp) }
        focusedInput={'startDate'}
        onFocusChange={(input) => console.error(input)}
        />;
    }

}
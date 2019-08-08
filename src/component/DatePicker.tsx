import React from "react";
import { DateRange } from 'moment-range';
import DateRangePicker from 'react-daterange-picker';
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment());

interface DatePickerState {
    value: DateRange | undefined;
    isOpen: boolean;
}

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

    constructor(props: {}) {
        super(props);

        const today = moment();

        this.state = {
            value: moment.range(today.clone().subtract(7, 'days'), today.clone()),
            isOpen: false
        };
    }

    render(): JSX.Element {
        return <DateRangePicker
        value={this.state.value}
        onSelect={((value: any, states: any) => this.onSelect(value, states)) as any}
        onClick={() => this.onToggle()} as any
        />;
    }

    {
        "numberOfCalendars": 2,
        "selectionType": "range",
        "singleDateRange": true,
        "minimumDate": {},
        "onSelect": "[function bound handleSelect]",
        "value": {},
        "bemNamespace": null,
        "bemBlock": "DateRangePicker",
        "className": "",
        "firstOfWeek": 0,
        "disableNavigation": false,
        "nextLabel": "",
        "previousLabel": "",
        "initialDate": {},
        "initialFromValue": true,
        "locale": "en",
        "stateDefinitions": {
          "__default": {}
        },
        "selectedLabel": "Your selected dates",
        "defaultState": "__default",
        "dateStates": [],
        "showLegend": false,
        "paginationArrowComponent": "[function ]"
      }
    private renderSelectionValue = () => {
        return (
            <div>
                <div>Selection</div>
                {this.state.value.start.format("YYYY-MM-DD")}
                {" - "}
                {this.state.value.end.format("YYYY-MM-DD")}
            </div>
        );
    };

    private onToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    private onSelect = (value: any, states: any) => {
        this.setState({ value, states });
        console.error(this.state);
    }

}
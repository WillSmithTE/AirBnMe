import React from "react";
import moment from 'moment-range';

export class DatePicker extends React.Component {
    
    private static states = {
        available: {
            color: null,
            label: 'Available'
        },
        unavailable: {
            selectable: false,
            color: '#595f69',
            label: 'Unavailable'
        }
    };

}
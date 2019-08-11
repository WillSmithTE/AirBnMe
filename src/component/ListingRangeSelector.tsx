import React from 'react';
// import { DatePicker } from './DatePicker';
// import { DateRange } from 'moment-range';
// import moment from 'moment';

// interface ListingRangeSelectorProps {
//     ranges: DateRange[];
//     setRanges: (ranges: DateRange[]) => void;
// }

// interface ListingRangeSelectorState {
//     ranges: DateRange[];
// }

// export class ListingRangeSelector extends React.Component<ListingRangeSelectorProps, ListingRangeSelectorState> {

//     constructor(props: ListingRangeSelectorProps) {
//         super(props);
//         this.state = { ranges: props.ranges };
//     }

//     render(): JSX.Element {
//         return <div>
//             <button type='button' onClick={() => this.newRange()}>Add an availability range</button>
//             {this.state.ranges.map((range) => <DatePicker initialRange={range} />)}
//         </div>;
//     }

//     private newRange(): void {
//         this.state.ranges.push(new DateRange(moment(), moment().add(7, 'days')));
//     }
// }
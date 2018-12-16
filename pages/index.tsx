import * as React from "react";
import "isomorphic-unfetch";

export interface IIndexProps {
        apiResponse: any;
}
export default class extends React.Component<IIndexProps> {
        public static async getInitialProps () {
                const openExFetch = await fetch("https://openexchangerates.org/api/latest.json?app_id=8c649078163e44f59ccad1c787dae6d4");
                const apiResponse = await openExFetch.json();

                return { apiResponse }
        }
        public render() {
                return (
                        <div>
                                {JSON.stringify(this.props.apiResponse)}
                        </div>
                );
        }
}

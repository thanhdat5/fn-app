import "./index.scss";

const Stats = () => {
    return <div className="fn-stats">
        <div className="header">
            <img src="/images/icons/chart.svg" alt="" />
            <span>Network Vol Stats</span>
        </div>
        <div className="body">
            <table>
                <thead>
                    <tr>
                        <th>month</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>07/2023</td>
                        <td>$999.999</td>
                    </tr>
                    <tr>
                        <td>06/2023</td>
                        <td>$999.999</td>
                    </tr>
                    <tr>
                        <td>05/2023</td>
                        <td>$999.999</td>
                    </tr>
                    <tr>
                        <td>04/2023</td>
                        <td>$999.999</td>
                    </tr>
                    <tr>
                        <td>03/2023</td>
                        <td>$999.999</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>$999.999.999</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
}
export default Stats
import { Pagination, Table } from 'react-bootstrap';
import './index.scss';
import { useAppSelector } from 'store/hooks';
import { authUserSelector } from 'redux-toolkit-saga/auth';

const FourNumberWinner = () => {
	const loggedUser = useAppSelector(authUserSelector);

	return (
		<div className={`fn-winner`}>
			
					<Table responsive striped={loggedUser ? true : false}>
						<thead>
							<tr>
								<th style={{ width: 140 }}>ID</th>
								<th>Winner</th>
								<th>Tickets</th>
								<th className="text-end">Prize</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>2023070301</td>
								<td>
									<b>(avt) Name1</b>
								</td>
								<td>
									<img src="/images/ticket/ticket-3.png" alt="" />
								</td>
								<td className="text-end">
									<span>số tiền giải nhất</span>
								</td>
							</tr>
							<tr>
								<td>2023070302</td>
								<td>
									<b>(avt) Name2</b>
								</td>
								<td>
									<img src="/images/ticket/ticket-2.png" alt="" />
								</td>
								<td className="text-end">
									<span>số tiền giải nhất</span>
								</td>
							</tr>
						</tbody>
					</Table>
					<Pagination className="fn-pagination">
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Item active>{2}</Pagination.Item>
						<Pagination.Item>{3}</Pagination.Item>
						<Pagination.Ellipsis />
						<Pagination.Item>{10}</Pagination.Item>
						<Pagination.Prev className="prev" />
						<Pagination.Next className="next" />
					</Pagination>
			
		</div>
	);
};
export default FourNumberWinner;

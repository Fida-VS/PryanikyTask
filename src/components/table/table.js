import styled from 'styled-components';
//import { ControlPanel } from '../control-panel/control-panel';
import { useState } from 'react';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { useDispatch, useSelector } from 'react-redux';
import { removePostAsync, saveEditedPostAsync } from '../../actions';
import { selectUserToken } from '../../selectors/select-user-token';


const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const TableContainer = ({
	className,
	id,
	companySigDate,
	companySignatureName,
	documentName,
	documentStatus,
	documentType,
	employeeNumber,
	employeeSigDate,
	employeeSignatureName,
}) => {
	const [isEditing, setIsEditing] = useState(false);

	const [companySigDateValue, setCompanySigDateValue] = useState(companySigDate);
	const [companySignatureNameValue, setCompanySignatureNameValue] =
		useState(companySignatureName);
	const [documentNameValue, setDocumentNameValue] = useState(documentName);
	const [documentStatusValue, setDocumentStatusValue] = useState(documentStatus);
	const [documentTypeValue, setDocumentTypeValue] = useState(documentType);
	const [employeeNumberValue, setEmployeeNumberValue] = useState(employeeNumber);
	const [employeeSigDateValue, setEmployeeSigDateValue] = useState(employeeSigDate);
	const [employeeSignatureNameValue, setEmployeeSignatureNameValue] =
		useState(employeeSignatureName);

		const token = useSelector(selectUserToken);


		const onInputChange1 = ({ target }) => setCompanySigDateValue(target.value);
	const onInputChange2 = ({ target }) => setCompanySignatureNameValue(target.value);
	const onInputChange3 = ({ target }) => setDocumentNameValue(target.value);
	const onInputChange4 = ({ target }) => setDocumentStatusValue(target.value);
	const onInputChange5 = ({ target }) => setDocumentTypeValue(target.value);
	const onInputChange6 = ({ target }) => setEmployeeNumberValue(target.value);
	const onInputChange7 = ({ target }) => setEmployeeSigDateValue(target.value);
	const onInputChange8 = ({ target }) => setEmployeeSignatureNameValue(target.value);


	const dispatch = useDispatch();

	const onPostEdit = () => {
		setIsEditing(true);
	};

	const saveChanges = (id) => {

		dispatch(saveEditedPostAsync(id, token, {
				companySigDate: companySigDateValue,
				companySignatureName: companySignatureNameValue,
				documentName: documentNameValue,
				documentStatus: documentStatusValue,
				documentType: documentTypeValue,
				employeeNumber: employeeNumberValue,
				employeeSigDate: employeeSigDateValue,
				employeeSignatureName: employeeSignatureNameValue,
		}));
		setIsEditing(false);
	};


	const onPostRemove = (id) => {
		dispatch(removePostAsync(id, token));
	};


	const buttons = isEditing ? (
		<>
		 <Button type="button" onClick={() => saveChanges(id)}>
					Save
				</Button>
		</>
	  ) : null;

	if (!isEditing) {
	return (
		<div className={className}>
			<RightAligned>
			<Button type="button" onClick={onPostEdit}>
					Edit
				</Button>
				{buttons}
				<Button type="button" onClick={() => onPostRemove(id)}>
					X
				</Button>
				</RightAligned>
			<table>
				<tbody>
			<tr>
				<td>companySigDate</td>
				<td>{companySigDateValue}</td>
			</tr>
			<tr>
				<td>companySignatureName</td>
				<td>{companySignatureNameValue}</td>
			</tr>
			<tr>
				<td>documentName</td>
				<td>{documentNameValue}</td>
			</tr>
			<tr>
				<td>documentStatus</td>
				<td>{documentStatusValue}</td>
			</tr>
			<tr>
				<td>documentType</td>
				<td>{documentTypeValue}</td>
			</tr>
			<tr>
				<td>employeeNumber</td>
				<td>{employeeNumberValue}</td>
			</tr>
			<tr>
				<td>employeeSigDate</td>
				<td>{employeeSigDateValue}</td>
			</tr>
			<tr>
				<td>employeeSignatureName</td>
				<td>{employeeSignatureNameValue}</td>
			</tr>
				</tbody>
			</table>
		</div>
		);
	} else {
		return (
			<div className={className}>
				<RightAligned>
			<Button type="button" onClick={onPostEdit}>
					Edit
				</Button>
				{buttons}
				<Button type="button" onClick={() => onPostRemove(id)}>
					X
				</Button>
				</RightAligned>
			<table>
				<tbody>
			<tr>
				<td>companySigDate</td>
				<td><Input
					type="date"
					name="CompanySigDate"
					value={companySigDateValue}
					onChange={onInputChange1}
				/></td>
			</tr>
			<tr>
				<td>companySignatureName</td>
				<td><Input
					type="text"
					name="CompanySignatureName"
					value={companySignatureNameValue}
					onChange={onInputChange2}
				/></td>
			</tr>
			<tr>
				<td>documentName</td>
				<td><Input
					type="text"
					name="DocumentName"
					value={documentNameValue}
					onChange={onInputChange3}
				/></td>
			</tr>
			<tr>
				<td>documentStatus</td>
				<td><Input
					type="text"
					name="DocumentStatusValue"
					value={documentStatusValue}
					onChange={onInputChange4}
				/></td>
			</tr>
			<tr>
				<td>documentType</td>
				<td><Input
					type="text"
					name="DocumentTypeValue"
					value={documentTypeValue}
					onChange={onInputChange5}
				/></td>
			</tr>
			<tr>
				<td>employeeNumber</td>
				<td><Input
					type="text"
					name="EmployeeNumberValue"
					value={employeeNumberValue}
					onChange={onInputChange6}
				/></td>
			</tr>
			<tr>
				<td>employeeSigDate</td>
				<td><Input
					type="date"
					name="EmployeeSigDateValue"
					value={employeeSigDateValue}
					onChange={onInputChange7}
				/></td>
			</tr>
			<tr>
				<td>employeeSignatureName</td>
				<td><Input
					type="text"
					name="EmployeeSignatureNameValue"
					value={employeeSignatureNameValue}
					onChange={onInputChange8}
				/></td>
			</tr>
				</tbody>
			</table>
		</div>
		)
	}
};

export const Table = styled(TableContainer)`
	margin-bottom: 30px;

	& table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
		height: auto;
	}

	& td,
	th {
		border: 1px solid #595959;
	}
	& td,
	th {
		padding: 3px;
		width: 30px;
		height: 35px;
	}
	& th {
		background: #347c99;
		color: #fff;
		font-weight: normal;
	}
`;

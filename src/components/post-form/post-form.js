/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePostAsync } from '../../actions';
import { selectUserToken } from '../../selectors';

const PostFormContainer = ({ className }) => {
	const [companySigDateValue, setCompanySigDateValue] = useState('');
	const [companySignatureNameValue, setCompanySignatureNameValue] = useState('');
	const [documentNameValue, setDocumentNameValue] = useState('');
	const [documentStatusValue, setDocumentStatusValue] = useState('');
	const [documentTypeValue, setDocumentTypeValue] = useState('');
	const [employeeNumberValue, setEmployeeNumberValue] = useState('');
	const [employeeSigDateValue, setEmployeeSigDateValue] = useState('');
	const [employeeSignatureNameValue, setEmployeeSignatureNameValue] = useState('');

	const token = useSelector(selectUserToken);

	const dispatch = useDispatch();


	const onSave = () => {
		dispatch(
			savePostAsync(token, {
				companySigDate: companySigDateValue,
				companySignatureName: companySignatureNameValue,
				documentName: documentNameValue,
				documentStatus: documentStatusValue,
				documentType: documentTypeValue,
				employeeNumber: employeeNumberValue,
				employeeSigDate: employeeSigDateValue,
				employeeSignatureName: employeeSignatureNameValue,
			}),
		);
	};

	const onInputChange1 = ({ target }) => setCompanySigDateValue(target.value);
	const onInputChange2 = ({ target }) => setCompanySignatureNameValue(target.value);
	const onInputChange3 = ({ target }) => setDocumentNameValue(target.value);
	const onInputChange4 = ({ target }) => setDocumentStatusValue(target.value);
	const onInputChange5 = ({ target }) => setDocumentTypeValue(target.value);
	const onInputChange6 = ({ target }) => setEmployeeNumberValue(target.value);
	const onInputChange7 = ({ target }) => setEmployeeSigDateValue(target.value);
	const onInputChange8 = ({ target }) => setEmployeeSignatureNameValue(target.value);

	return (
		<div className={className}>
			<form>
				<Input
					type="date"
					name="CompanySigDate"
					value={companySigDateValue}
					onChange={onInputChange1}
				/>
				<Input
					type="text"
					name="CompanySignatureName"
					value={companySignatureNameValue}
					onChange={onInputChange2}
				/>
				<Input
					type="text"
					name="DocumentName"
					value={documentNameValue}
					onChange={onInputChange3}
				/>
				<Input
					type="text"
					name="DocumentStatusValue"
					value={documentStatusValue}
					onChange={onInputChange4}
				/>
				<Input
					type="text"
					name="DocumentTypeValue"
					value={documentTypeValue}
					onChange={onInputChange5}
				/>
				<Input
					type="text"
					name="EmployeeNumberValue"
					value={employeeNumberValue}
					onChange={onInputChange6}
				/>
				<Input
					type="date"
					name="EmployeeSigDateValue"
					value={employeeSigDateValue}
					onChange={onInputChange7}
				/>
				<Input
					type="text"
					name="EmployeeSignatureNameValue"
					value={employeeSignatureNameValue}
					onChange={onInputChange8}
				/>
				<Button type="submit" onClick={onSave}>
					Submit
				</Button>
			</form>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)``;

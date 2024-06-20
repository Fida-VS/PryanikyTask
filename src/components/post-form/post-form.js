/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_FORM, savePostAsync } from '../../actions';
import { selectUserToken } from '../../selectors';
import {
	Button,
	Container,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	TextField,
} from '@mui/material';

export const PostForm = () => {
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
		dispatch(CLOSE_FORM);
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
		<Container sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
					<TableBody>
						<TableRow
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								Company sig date
							</TableCell>
							<TableCell align="right">
								<TextField
									fullWidth
									id="fullWidth"
									size="small"
									type="date"
									name="CompanySigDate"
									value={companySigDateValue}
									onChange={onInputChange1}
								/>
							</TableCell>
						</TableRow>

						<TableRow
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								Company signature name
							</TableCell>
							<TableCell align="right">
								<TextField
									size="small"
									fullWidth
									id="fullWidth"
									type="text"
									name="CompanySignatureName"
									value={companySignatureNameValue}
									onChange={onInputChange2}
								/>
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell component="th" scope="row">
								Document name
							</TableCell>
							<TableCell align="right">
								<TextField
									fullWidth
									id="fullWidth"
									size="small"
									type="text"
									name="DocumentName"
									value={documentNameValue}
									onChange={onInputChange3}
								/>
							</TableCell>
						</TableRow>

						<TableRow
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								Document status
							</TableCell>
							<TableCell align="right">
								<TextField
									fullWidth
									id="fullWidth"
									size="small"
									type="text"
									name="DocumentStatusValue"
									value={documentStatusValue}
									onChange={onInputChange4}
								/>
							</TableCell>
						</TableRow>

						<TableRow
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								Document type
							</TableCell>
							<TableCell align="right">
								<TextField
									fullWidth
									id="fullWidth"
									size="small"
									type="text"
									name="DocumentTypeValue"
									value={documentTypeValue}
									onChange={onInputChange5}
								/>
							</TableCell>
						</TableRow>

						<TableRow
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								Employee number
							</TableCell>
							<TableCell align="right">
								<TextField
									fullWidth
									id="fullWidth"
									size="small"
									type="text"
									name="EmployeeNumberValue"
									value={employeeNumberValue}
									onChange={onInputChange6}
								/>
							</TableCell>
						</TableRow>

						<TableRow
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								Employee sig date
							</TableCell>
							<TableCell align="right">
								<TextField
									fullWidth
									id="fullWidth"
									size="small"
									type="date"
									name="EmployeeSigDateValue"
									value={employeeSigDateValue}
									onChange={onInputChange7}
								/>
							</TableCell>
						</TableRow>

						<TableRow
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								Employee signature name
							</TableCell>
							<TableCell align="right">
								<TextField
									fullWidth
									id="fullWidth"
									size="small"
									type="text"
									name="EmployeeSignatureNameValue"
									value={employeeSignatureNameValue}
									onChange={onInputChange8}
								/>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<Container
				sx={{
					width: '17rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Button
					size="large"
					fullWidth
					id="fullWidth"
					variant="contained"
					sx={{ marginTop: '2rem' }}
					type="submit"
					onClick={onSave}
				>
					Submit
				</Button>
			</Container>
		</Container>
	);
};

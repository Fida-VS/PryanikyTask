// import { useDispatch } from 'react-redux';
// import { Button } from '../button/button';
// import styled from 'styled-components';
// import { removePostAsync, saveEditedPostAsync } from '../../actions';
// //import { useState } from 'react';



// const RightAligned = styled.div`
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: center;
// `;

// const ControlPanelContainer = ({
// 	className,
// 	id,
// 	isEditing,
// 	setIsEditing,
// 	data,
// 	setData,
// 	updatedData,
// 	editedData,
// 	setEditedData
// }) => {


// 	const dispatch = useDispatch();

// 	const onPostEdit = () => {
// 		setIsEditing(true);
// 	};

// 	const saveChanges = (id) => {

// 		dispatch(saveEditedPostAsync(id, {}));
// 		setIsEditing(false);
// 	};

// 	const cancelEditing = () => {
// 		setIsEditing(false);
// 	  };

// 	const onPostRemove = (id) => {
// 		dispatch(removePostAsync(id));
// 	};


// 	const buttons = isEditing ? (
// 		<>
// 		 <Button type="button" onClick={() => saveChanges(id)}>
// 					Save
// 				</Button>
// 		  <Button onClick={cancelEditing}>Отменить</Button>
// 		</>
// 	  ) : null;

// 	return (
// 		<div className={className}>
// 			<RightAligned>

// 			</RightAligned>
// 		</div>
// 	);
// };

// export const ControlPanel = styled(ControlPanelContainer)`
// 	width: 30%;
// `;

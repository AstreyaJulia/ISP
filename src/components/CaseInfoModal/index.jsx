import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Dialog, Transition} from '@headlessui/react';
import Modal from "../Modal";
import {Avatar} from "../Avatar";
import {caseTypesSettings} from "../../config";
import Badge from "../Badge";

const CaseInfoModal = ({open, setOpen, onModalClose, children, item, caseStatus}) => (
    <Modal setOpen={setOpen} open={open} onModalClose={onModalClose} size='lg'>
        <Modal.Toolbar
            title={item?.CASE_NUMBER ?? ''}
            titleVariant='h6'
            icon={
                <Avatar
                    size='14'
                    shape='circle'
                    name={item?.CASE_TYPE ?? ''}
                    color={caseTypesSettings[item?.CASE_TYPE ?? 'ADM'].color ?? 'indigo'}
                />
            }
            subtitle={<Badge
                size="small"
                shape="rounded"
                color={caseStatus?.color ?? 'indigo'}
                item={caseStatus?.item ?? 'title'}
            />}
        />
        <Modal.Body>{children}</Modal.Body>

    </Modal>
);

CaseInfoModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    onModalClose: PropTypes.func,
    children: PropTypes.node,
};

export default CaseInfoModal;

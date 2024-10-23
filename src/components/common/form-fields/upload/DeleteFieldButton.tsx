/**
 * This file is part of IKTARAA-CONNECT.
 *
 * Its is form Field
 *
 */
import { forwardRef, useCallback } from 'react';
import { Path, Control, PathValue, useController, UseControllerProps } from 'react-hook-form';

import { IconButton } from '@mui/material';


import CONSTANT from '@/utils/helpers/constant-helper';

type FormValues = {
  [key: string]: unknown;
};


const DeleteFieldButton = forwardRef(
  <T extends FormValues>(props: UseControllerProps<T> & { control: Control<T> } & { _id: string, onClick?: () => void }) => {
    const { name, control, onClick, _id = '', } = props;
    const { field } = useController({
      name: `${name}${CONSTANT.DeleteKey}` as never,
      control,
      defaultValue: [] as PathValue<T, Path<T>>,
    });
    // const isViewPage = useWatch({ control, name: PROJECT_CONSTANTS.isViewPage as Path<T> });
    const handleDeleteField = useCallback(() => {
      _id && field.onChange([...((field.value ?? []) as never), _id]);
      onClick && onClick();
    }, [_id, field, onClick]);

    return (
      <IconButton onClick={() => handleDeleteField()}>
        Delete
        {/* <DeleteIcon /> */}
      </IconButton>
    );
  }
);

DeleteFieldButton.displayName = 'DeleteFieldButton';

export default DeleteFieldButton as <T extends FormValues>(
  props: UseControllerProps<T> & { control: Control<T> } & { _id: string, onClick?: () => void }
) => JSX.Element;

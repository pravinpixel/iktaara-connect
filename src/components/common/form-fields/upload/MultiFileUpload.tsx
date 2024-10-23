/**
 * This file is part of IKTARAA_CONNECT.
 *
 * Its is form Field
 * It used for uploading documents in Form Fields
 *
 */
import { Ref, useRef, forwardRef } from 'react';
import { Path, Control, PathValue, FieldError, useController, UseControllerProps } from 'react-hook-form';

import { Box, Button, InputLabel, Typography, ButtonGroup, FormHelperText } from '@mui/material';


// import DeleteFieldButton from './DeleteFieldButton';
import { stringFileName } from '@/utils/helpers/global-function';

type FormValues = {
    [key: string]: unknown;
};

type CustomErrorType = FieldError & {
    [key: string]: FieldError;
};

const UploadDocumentField = forwardRef(
    <T extends FormValues>(props: UseControllerProps<T> & { control: Control<T>, multiple: boolean }, ref: Ref<HTMLDivElement>) => {
        const { name, control, multiple = false } = props;
        const fileInputRef = useRef<HTMLInputElement>(null);
        const {
            field: { ref: fieldRef, ...field },
            fieldState: { error },
        } = useController({
            name,
            control,
            defaultValue: (multiple ? [] : '') as PathValue<T, Path<T>>,
        });
        // const isViewPage = useWatch({ control, name: PROJECT_CONSTANTS.isViewPage as Path<T> });

        const FileName = multiple
            ? (field?.value as unknown as File[])?.length + ' File Selected'
            : ((field?.value as unknown as File)?.name ?? stringFileName(field.value as unknown as string));
        const handleUpload = () => {
            if (fileInputRef?.current?.files)
                if (multiple) {
                    field.onChange([...((field.value as Path<T>) || []), ...(fileInputRef?.current?.files || [])]);
                } else field.onChange(fileInputRef?.current?.files?.[0]);
        };
        const handleDeleteImage = (index: number) => {
            const updatedImages = (field?.value as unknown as File[]).filter((_, i) => i !== index);
            field.onChange(updatedImages);
        };
        return (
            <Box width={'100%'} ref={ref}>
                <ButtonGroup
                    variant="contained"
                    aria-label="Button group with a nested menu"
                    fullWidth
                    onClick={() => {
                        fileInputRef?.current?.click();
                    }}
                    sx={{ boxShadow: 'unset' }}
                >
                    <Box
                        ref={fieldRef}
                        sx={({ palette }) => ({
                            width: '100%',
                            gap: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            p: 2,
                            height: '2.8125rem',
                            border: `1px solid ${((error as CustomErrorType)?.length ? error : error?.message) ? palette.error.main : palette.grey[400]}`,
                            cursor: 'pointer',
                            borderRadius: `6px 0 0 6px`,
                        })}
                    >
                        {/* <Typography variant="subtitle2">Choose File</Typography> */}
                        <Typography color={({ palette }) => palette.grey[600]}>
                            {(multiple ? !!(field?.value as unknown as File[])?.length : field.value) ? FileName : ''}
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            width: '30%',
                        }}
                    >
                        Browse
                    </Button>
                </ButtonGroup>
  
                {/* {fields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2 mt-2">
                        <p className="text-f16">{field.name}</p>
                        <Box onClick={() => remove(index)}>
                            <ImageComponent
                                src="/assets/icons/delete-icons.svg"
                                alt="delete"
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </Box>
                    </div>
                ))} */}

                <input type="file" ref={fileInputRef} hidden multiple={multiple} onChange={handleUpload} />
            </Box>
        );
    }
);

UploadDocumentField.displayName = 'UploadDocumentField';

export default UploadDocumentField as <T extends FormValues>(
    props: UseControllerProps<T> & { control: Control<T> } & UploadDocumentFieldType
) => JSX.Element;

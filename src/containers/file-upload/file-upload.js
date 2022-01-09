import React from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { gql, useMutation } from "@apollo/client";
import { StyledCoverContainer, StyledCover } from './file-upload-styles';

const SIGN_S3_REQUEST = gql`
    mutation Mutation($bucket: String!, $filetype: String!, $filename: String!) {
        signS3Request(bucket: $bucket, filetype: $filetype, filename: $filename) {
            url
            signedRequest
        }
    }
`;

const UPDATE_PROPERTY_COVER_IMAGE = gql`
    mutation UpdatePropertyCoverImage($updatePropertyCoverImageId: ID!, $url: String!) {
        updatePropertyCoverImage(id: $updatePropertyCoverImageId, url: $url) {
            code
            success
            message
            property {
                id
                thumbnailUrl
            }
        }
    }
`;


const uploadToS3 = async (file, signedRequest) => {
    const options = {
        headers: {
            "Content-Type": file.type
        }
    };
    await axios.put(signedRequest, file, options);
};


const FileUpload = ({id, thumbnail}) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({multiple: false});
    const [signS3Request] = useMutation(SIGN_S3_REQUEST);
    const [updatePropertyCoverImage] = useMutation(UPDATE_PROPERTY_COVER_IMAGE);

    const submit = async () => {
        console.log(acceptedFiles)
        const response = await signS3Request({
            variables: {
                bucket: 'cover.image',
                filetype: acceptedFiles?.[0].type,
                filename: acceptedFiles?.[0].name
            }
        });
        const { signedRequest, url } = response.data.signS3Request;
        await uploadToS3(acceptedFiles[0], signedRequest);
        await updatePropertyCoverImage({variables: {updatePropertyCoverImageId: id, url: url}});
    };

    return (
        <StyledCoverContainer>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                {
                    acceptedFiles?.length === 0 ?
                    <StyledCover src={thumbnail} alt={'thumbnail'} /> : 
                    <StyledCover src={URL.createObjectURL(acceptedFiles[0])} alt={'thumbnail'} />
                }
            </div>
            {acceptedFiles?.length !== 0 &&
                <aside>
                    <button onClick={submit}>Upload</button>
                </aside>
            }
        </StyledCoverContainer>
    );
}

export default FileUpload;
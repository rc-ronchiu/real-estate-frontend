import { gql, useMutation } from '@apollo/client';
import React, { useRef } from 'react'
import {
    StyledCommentTitle,
    StyledCommentContainer,
    StyledComment,
    StyledCommentContent,
    StyledCommentAuthor,
    StyledCommentText,
    StyledCommentDeleteButton,
    StyledCommentSendButton,
    StyledCommentInput,
} from './property-comment-styles';

const ADD_COMMENT = gql`
    mutation AddComment($propertyId: ID!, $userId: ID!, $author: String!, $comment: String) {
        addComment(propertyId: $propertyId, userId: $userId, author: $author, comment: $comment) {
            code
            success
            message
            property {
                id
                comments {
                    id
                    userId
                    comment
                }
            }
        }
    }
`;

const DELETE_COMMENT = gql`
    mutation DeleteComment($propertyId: ID!, $commentId: ID!) {
        deleteComment(propertyId: $propertyId, commentId: $commentId) {
            code
            success
            message
            property {
                id
                comments {
                    id
                    userId
                    comment
                }
            }
        }
    }
`;

const PropertyComment = ({ propertyId, comments }) => {
    const [addComment] = useMutation(ADD_COMMENT);
    const [deleteComment] = useMutation(DELETE_COMMENT);
    const commentRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = commentRef.current.value;
        addComment({variables: {
            propertyId: propertyId,
            userId: JSON.parse(localStorage.getItem('user')).id,
            author: JSON.parse(localStorage.getItem('user')).username,
            comment: data
        }});
        commentRef.current.value = '';
    };

    const handleDelete = async (id) => {
        deleteComment({variables: {
            propertyId: propertyId,
            commentId: id
        }})
    };

    return (
        <StyledCommentContainer>
            <StyledCommentTitle>Comments</StyledCommentTitle>
            {comments?.map(comment => (
                <StyledComment>
                    <StyledCommentContent>
                        <StyledCommentAuthor>{comment.author}</StyledCommentAuthor>
                        <StyledCommentText>{comment.comment}</StyledCommentText>
                    </StyledCommentContent>
                    {JSON.parse(localStorage.getItem('user'))?.id === comment.userId 
                    ? 
                    <StyledCommentDeleteButton onClick={() => handleDelete(comment.id)}>Delete</StyledCommentDeleteButton> :
                    null}
                </StyledComment>
            ))}
            {JSON.parse(localStorage.getItem('user')) &&
            <StyledComment>
                    <form onSubmit={handleSubmit}>
                        <StyledCommentAuthor>{JSON.parse(localStorage.getItem('user')).username}</StyledCommentAuthor>
                        <StyledCommentInput type="text" ref={commentRef} placeholder="Leave your comment here..." required />
                        <StyledCommentSendButton type="submit">Send</StyledCommentSendButton>
                    </form>
            </StyledComment>}
        </StyledCommentContainer>
    )
}

export default PropertyComment;
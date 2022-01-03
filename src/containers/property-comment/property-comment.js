import { gql, useMutation } from '@apollo/client';
import React, { useReducer, useState, useRef, useEffect } from 'react'
import {
    StyledCommentTitle,
    StyledCommentContainer,
    StyledComment,
    StyledCommentContent,
    StyledCommentAuthor,
    StyledCommentText,
    StyledCommentDeleteButton,
    StyledCommentInputContent,
    StyledCommentAuthorInput,
    StyledCommentInput,
} from './property-comment-styles';

const UPDATE_COMMENTS = gql`
    mutation UpdateComments($updateCommentsId: ID!, $comments: [commentInput]!) {
        updateComments(id: $updateCommentsId, comments: $comments) {
            code
            success
            message
            property {
                id
                comments {
                    id
                    comment
                    author
                }
            }
        }
    }
`;

const commentReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            const comments = [...state.comments];
            comments.push({__typename: 'comment', id: state.comments[state.comments.length - 1].id + 1, author: action.payload.author, comment: action.payload.comment });
            return { "comments": comments }
        case 'REMOVE_COMMENT':
            const commentsWithoutDeleted = state.comments.filter(comment => comment.id !== action.payload);
            return { "comments": commentsWithoutDeleted }
        default:
            throw new Error();
    }
}

const PropertyComment = ({ propertyId, comments }) => {
    const [updateComments] = useMutation(UPDATE_COMMENTS);
    const authorRef = useRef(null);
    const commentRef = useRef(null);
    const didMountRef = useRef(false);
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');
    const [state, dispatch] = useReducer(commentReducer, { "comments": comments })

    useEffect(() => {
        if (didMountRef.current) {
            let commentsWithoutId =[]
            state.comments.map(comment => {
                commentsWithoutId.push({author: comment.author, comment: comment.comment});
            })
            updateComments({
                variables: {
                    updateCommentsId: propertyId,
                    comments: commentsWithoutId
                }
            })
        }
        else {
            didMountRef.current = true;
        }

    }, [propertyId, state, updateComments]);

    const handleSendButtonClick = async () => {
        if (author !== '' && comment !== '') {
            dispatch({ type: "ADD_COMMENT", payload: { author: author, comment: comment } });
            setAuthor('');
            setComment('');
            authorRef.current.value = '';
            commentRef.current.value = '';
        }
    };
    return (
        <StyledCommentContainer>
            <StyledCommentTitle>Comments</StyledCommentTitle>
            {state.comments?.map(comment => (
                <StyledComment>
                    <StyledCommentContent>
                        <StyledCommentAuthor>{comment.author}</StyledCommentAuthor>
                        <StyledCommentText>{comment.comment}</StyledCommentText>
                    </StyledCommentContent>
                    {localStorage.getItem('userToken') && <StyledCommentDeleteButton onClick={() => dispatch({ type: "REMOVE_COMMENT", payload: comment.id })}>Delete</StyledCommentDeleteButton>}
                </StyledComment>
            ))}
            <StyledComment>
                <StyledCommentInputContent>
                    <StyledCommentAuthorInput type="text" ref={authorRef} placeholder="Name" onChange={(e) => setAuthor(e.target.value)} required />
                    <StyledCommentInput type="text" ref={commentRef} placeholder="Comment" onChange={(e) => setComment(e.target.value)} required />
                </StyledCommentInputContent>
                <StyledCommentDeleteButton onClick={handleSendButtonClick}>Send</StyledCommentDeleteButton>
            </StyledComment>
        </StyledCommentContainer>
    )
}

export default PropertyComment;
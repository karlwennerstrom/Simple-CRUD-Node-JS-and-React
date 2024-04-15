import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost,addNewPost } from '../features/posts/postSlice'
import '../styles/postForm.css';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function PostForm (){
    const [post, setPost] = useState({name: '', description: ''});

    //handle change event of input
    const handleChange = (e) => {
        
        setPost({
            ...post,
            [e.target.name]: e.target.value
        
        })
    }


    //handle submit event of form 
    const handleSubmit = (values, { resetForm }) => {
        // Check if name and description are not empty
        if (values.name.trim() !== '' && values.description.trim() !== '') {
          dispatch(addNewPost(values));
          // Reset form after submit
          resetForm();
        }
      };
    //use dispatch to dispatch the action to the reducer
    const dispatch = useDispatch();
    //validation schema for form 
    const validationSchema = Yup.object({
        name: Yup.string()
          .required('Name is required')
          .max(255, 'Name must be 255 characters or less'),
        description: Yup.string()
          .required('Description is required')
          .max(255, 'Description must be 255 characters or less'),
      });

    return (
        <Formik
        initialValues={{ name: '', description: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}

        onKeyPress={(e) => {
            // Submit form when user presses Enter key
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit(e.currentTarget.values, { resetForm: () => e.currentTarget.resetForm() });
              }
            }}
      >
        <div>

       
         <Form>
        <div className='containerInput'>
         
          <Field type="text" name="name" className="form-control" placeholder="Name"/>
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div className='containerInput' >
        
          <Field as="textarea" name="description" className="form-control" placeholder="Description" />
          <ErrorMessage name="description" component="div" className="error-message" />
        </div>
        <div className='containerButton'>
        <button type="submit" className="btn btn-primary">
          Save
        </button>

            </div>

        
      </Form>
      </div>
          </Formik>

    )
}
export default PostForm;
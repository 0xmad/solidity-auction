import * as yup from 'yup';
import { setIn } from 'final-form';

export interface Values {
  name: string;
  description: string;
  startPrice: number;
  category: 'art';
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(255, 'Max length is 255 characters'),
  description: yup
    .string()
    .required('Description is required')
    .min(2, 'Description must be at least 2 characters')
    .max(255, 'Max length is 255 characters'),
  startPrice: yup
    .number()
    .typeError('Start price must be a number')
    .required('Start price is required')
    .min(0.01, 'Start price must be greater than or equal to 0.01'),
  category: yup.string().required('Category is required').oneOf(['art']),
});

function setInError(
  errors: Record<string, unknown>,
  innerError: yup.ValidationError,
): Record<string, unknown> {
  return setIn(errors, innerError.path as string, innerError.message) as Record<
    string,
    unknown
  >;
}

export default async function validate(
  values: Values,
): Promise<yup.ValidationError> {
  const initial = {};
  return schema
    .validate(values, { abortEarly: false, stripUnknown: true })
    .then(() => undefined)
    .catch((error: yup.ValidationError) =>
      error.inner.reduce(setInError, initial),
    ) as Promise<yup.ValidationError>;
}

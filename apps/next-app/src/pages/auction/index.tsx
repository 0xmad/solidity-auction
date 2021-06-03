import { ReactElement, useCallback } from 'react';
import Head from 'next/head';
import { useForm, useField } from 'react-final-form-hooks';

import { Input, Button } from '../../components/ui';
import { Container, Form } from './styles';

interface Values {
  name: string;
  description: string;
  startPrice: number;
  category: string;
}

export default function Home(): ReactElement {
  const onSubmit = useCallback((values: Values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  }, []);

  const { form, handleSubmit } = useForm<Values>({
    initialValues: {
      name: '',
      description: '',
      startPrice: 0,
      category: 'art',
    },
    onSubmit,
  });

  const name = useField<string, Values>('name', form);
  const description = useField<string, Values>('description', form);
  const startPrice = useField<number, Values>('startPrice', form);

  return (
    <Container data-testid="create-auction-page">
      <Head>
        <title>Create auction</title>
      </Head>

      <Form as="form" onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Item name"
          placeholder="Enter item name"
          {...name.input}
          {...name.meta}
        />

        <Input
          id="description"
          type="textarea"
          label="Item description"
          placeholder="Enter item description"
          {...description.input}
          {...description.meta}
        />

        <Input
          id="startPrice"
          label="Item start price"
          placeholder="Enter item start price"
          {...startPrice.input}
          {...startPrice.meta}
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}

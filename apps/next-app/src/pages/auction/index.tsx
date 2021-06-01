import { ReactElement, useCallback } from 'react';
import Head from 'next/head';

import { useForm, useField } from 'react-final-form-hooks';

import { Input } from '../../components/ui';

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
    <div data-testid="create-auction-page">
      <Head>
        <title>Create auction</title>
      </Head>

      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          name="name"
          label="Item name"
          placeholder="Enter item name"
          {...name}
        />

        <Input
          id="description"
          type="textarea"
          name="description"
          label="Item description"
          placeholder="Enter item description"
          {...description}
        />

        <Input
          id="startPrice"
          name="startPrice"
          label="Item start price"
          placeholder="Enter item start price"
          {...startPrice}
        />

        <label htmlFor="category">Item category</label>
        <select id="category" name="category">
          <option value="art">Art</option>
          <option value="services">Services</option>
        </select>
      </form>
    </div>
  );
}

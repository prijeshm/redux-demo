import React from 'react';
import TextInput from '../common/TextInput';
import ButtonInput from '../common/ButtonInput';
import SelectInput from '../common/SelectInput';

const ProductForm = ({ product, onChange, onSave, onCancel, errors, categories }) => {
    return(
        <form>
            <TextInput name="name" value={product.name} placeholder="Enter Product Name" error={errors.name} onChange={onChange} />
            <SelectInput name="category" value={product.category} defaultOption="--Product Category--" 
                error={errors.category} onChange={onChange} options={categories} />
            <TextInput name="price" value={product.price} placeholder="Enter Product Price" error={errors.price} onChange={onChange} />
            <ButtonInput name="save" onClick={onSave} value="Save"/>
            <ButtonInput name="cancel" onClick={onCancel} value="Cancel"/>
        </form>
    );
}

export default ProductForm;
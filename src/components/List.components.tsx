type Props = {
  data: string[];
  handleRemoveData: (e: number) => void;
  handleEditData: (e: number) => void;
};

const ListComponents = ({ data, handleRemoveData, handleEditData }: Props) => {
  const handleDelete = (e: number) => {
    handleRemoveData(e);
  };

  const handleEdit = (e: number) => {
    handleEditData(e);
  };

  return (
    <div>
      <ol>
        {data.map((i, index) => (
          <li key={index}>
            {i}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListComponents;

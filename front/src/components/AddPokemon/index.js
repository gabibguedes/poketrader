import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const AddPokemon = ({ onAdd }) => {
  const [text, setText] = useState('')

  return (
    <InputGroup className="mb-3 mt-3">
      <FormControl
        placeholder="Digite o nome ou o ID do Pokemon"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyPress={
          (event) => {
            if (event.key === 'Enter') {
              onAdd(text)
            }
          }
        }
      />
      <InputGroup.Append>
        <Button
          variant="outline-info"
          onClick={() => {
            onAdd(text)
            setText('')
          }}
        >
          Adicionar
        </Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default AddPokemon
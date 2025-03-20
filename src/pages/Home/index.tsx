import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmount, Separator,
  StartCountdownButton,
  TasksInput,
} from './styles'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data: unknown) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TasksInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Estudar React" />
            <option value="Trabalhar no Sigma" />
            <option value="Meditar" />
            <option value="Ler documentação do useState" />
          </datalist>

          <label htmlFor="minutesAmounts">durante</label>
          <MinutesAmount
            type="number"
            id="minutesAmounts"
            placeholder="00"
            step={5}
            min={0}
            max={60}
            {...register('minutesAmounts', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}

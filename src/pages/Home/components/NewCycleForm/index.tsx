import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmount, TasksInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../..'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TasksInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('minutesAmounts', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}

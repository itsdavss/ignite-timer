import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormContainer, MinutesAmount, TasksInput } from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmounts: zod.number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmounts: 0,
    },
  })

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

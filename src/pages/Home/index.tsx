import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmount, Separator,
  StartCountdownButton,
  TasksInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TasksInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
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

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}

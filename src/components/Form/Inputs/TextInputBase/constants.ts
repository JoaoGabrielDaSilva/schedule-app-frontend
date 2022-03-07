
export const FLOATING_LABEL_STATES = {
  DISABLED: {
    TOP: 13,
    LEFT: 40
  },
  ENABLED: {
    TOP: -15,
    LEFT: 20
  }
}

export const INPUT_RANGE = [0, 1]

export const INPUT_TYPES = {
  text: {
    onChangeText: value => value,
    maxLength: 5
  },
  password: {
    onChangeText: value => value,
    maxLength: 5
  },
}
module.exports = (data) => {
  return {
    samtaleCategories: `Elevsamtalen er${data.variant === 'samtale' ? ' gjennomført' : ' ikke gjennomført'}`
  }
}

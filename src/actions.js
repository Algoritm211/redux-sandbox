export const inc = () => {
    return {type: 'INC'}
  }
  
export const dec = () => {
    return {type: 'DEC'}
  }
  
export const rnd = () => {
    return {
        type: 'RND', 
        payload: Math.floor(Math.random() * 10)
    }
  }
  
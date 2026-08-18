import styles from './Button.module.css'

function Button(){

    //inline css
    const styles={
            backgroundColor: "hsl(200,100%,50%)",
            color: "white",
            pad: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
        }

    return (
        // <button className={styles.button}>Click Me</button>
        <button style={styles}>Click Me</button>
    );
}

export default Button
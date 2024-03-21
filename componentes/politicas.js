import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
  },
  box: {
    backgroundColor: '#ffd645',
    color: '#333',
    padding: '20px',
    borderRadius: '10px',
  },
  heading: {
    borderBottom: '2px solid #333',
    paddingBottom: '10px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    textAlign: 'justify',
  }
};


export const Politicas = () => {
  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <div style={styles.box}>
          <h1 style={styles.heading}>POLÍTICAS</h1>
          <p style={styles.paragraph}>Las políticas se basan en la transparencia, calidad y responsabilidad en la creación de nuestros productos y dirección de la empresa.</p>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.box}>
          <h1 style={styles.heading}>VISIÓN</h1>
          <p style={styles.paragraph}>Visión de Healthy & Nutritions a 5 años: Tener un desarrollo sustentable, así como distribuir nuestros productos por todo el estado de Hidalgo y sus colindantes. A 10 años: Ser la empresa líder en la elaboración de productos hechos a base de frutas en toda la zona centro de México.</p>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.box}>
          <h1 style={styles.heading}>MISIÓN</h1>
          <p style={styles.paragraph}>Misión de Healthy & Nutritions: Satisfacer el gusto de las personas con la elaboración de un snack delicioso y saludable que promueve una buena alimentación.</p>
        </div>
      </div>
    </div>
  );
}

export default Politicas;

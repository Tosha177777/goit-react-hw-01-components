import css from './css/Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}> {`${percentage}%`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

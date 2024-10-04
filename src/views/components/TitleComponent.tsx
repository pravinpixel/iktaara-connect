import React from 'react'

type Props = {
  first_title: string;
  seconds_title: string;
};

const TitleComponent = (props: Props) => {
     const { first_title, seconds_title } = props;
  return (
    <section>
      <div className="text-f26 font-bold mb-2">
        <h6 className="text-ik_bluegreydarken3">
          {first_title} <span className="text-ik_pink"> {seconds_title}</span>
        </h6>
      </div>
    </section>
  );
};

export default TitleComponent
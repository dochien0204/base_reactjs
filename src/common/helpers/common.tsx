import React from "react";

const helpers = {
  toYearMonthDay: (dateString: string) => {
    const date = new Date(dateString);
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() > 10 ? date.getMonth : "0" + date.getMonth()) +
      "-" +
      (date.getDate() > 10 ? date.getDate() : "0" + date.getDate())
    );
  },
};

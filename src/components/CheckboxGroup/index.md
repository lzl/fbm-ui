---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# CheckboxGroup 复选框

## 代码演示

```jsx
/**
 * title: 基本 竖排展示
 */
import * as React from "react";
import { CheckboxGroup, Demo, Checkbox } from "fbm-ui";

export default () => {
  const [value, setValue] = React.useState(undefined);

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <Demo>
      <CheckboxGroup row={false} onChange={(value) => handleChange(value)} value={value}>
        <Checkbox value={"B"} label="B" />
        <Checkbox value={"C"} label="C" />
        <Checkbox value={"D"} label="D" />
      </CheckboxGroup>
    </Demo>
  );
};
```
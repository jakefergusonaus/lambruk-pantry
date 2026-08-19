/* @ds-bundle: {"format":4,"namespace":"LambrukPantryDesignSystem_7e297f","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"EyebrowLabel","sourcePath":"components/content/EyebrowLabel.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Newsletter","sourcePath":"components/forms/Newsletter.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"1f116ddb133e","components/actions/IconButton.jsx":"a3ee7e32c68d","components/commerce/ProductCard.jsx":"57ef463149c7","components/content/Badge.jsx":"8ccb9742e0e5","components/content/EyebrowLabel.jsx":"6ec31e44c275","components/content/SectionHeading.jsx":"a103a718cd79","components/content/Tag.jsx":"9dc139b0228e","components/forms/Input.jsx":"29556188fb47","components/forms/Newsletter.jsx":"e21cb62a9d44","ui_kits/website/Cafe.jsx":"b5dc22f1bccb","ui_kits/website/CartDrawer.jsx":"b5880954f3bb","ui_kits/website/Categories.jsx":"0c184e77b925","ui_kits/website/Footer.jsx":"67369470232f","ui_kits/website/Header.jsx":"ad1eda2289e7","ui_kits/website/Hero.jsx":"16f1884c4251","ui_kits/website/Occasions.jsx":"ecd45a65f7ce","ui_kits/website/Promise.jsx":"ff4e02dd3e41","ui_kits/website/Spotlight.jsx":"e0408bf99098","ui_kits/website/Wholesale.jsx":"fa65a64dd057","ui_kits/website/WhyLambruk.jsx":"27d23f0c9aaf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LambrukPantryDesignSystem_7e297f = window.LambrukPantryDesignSystem_7e297f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  lineHeight: 1,
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'background-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)'
};
const sizes = {
  sm: {
    fontSize: '13px',
    padding: '0 16px',
    height: '36px',
    borderRadius: 'var(--radius-sm)'
  },
  md: {
    fontSize: '14px',
    padding: '0 22px',
    height: '44px',
    borderRadius: 'var(--radius-sm)'
  },
  lg: {
    fontSize: '15px',
    padding: '0 30px',
    height: '52px',
    borderRadius: 'var(--radius-sm)'
  }
};
const variants = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--gold-50)',
    borderColor: 'var(--brand)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--brand)',
    borderColor: 'var(--border-strong)'
  },
  accent: {
    background: 'var(--accent)',
    color: 'var(--blue-950)',
    borderColor: 'var(--accent)'
  },
  onDark: {
    background: 'var(--gold-50)',
    color: 'var(--brand)',
    borderColor: 'var(--gold-50)'
  },
  onDarkOutline: {
    background: 'transparent',
    color: 'var(--gold-50)',
    borderColor: 'rgba(247,245,242,.42)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand)',
    borderColor: 'transparent',
    padding: '0 4px'
  }
};
const hovers = {
  primary: {
    background: 'var(--brand-deep)',
    borderColor: 'var(--brand-deep)'
  },
  secondary: {
    background: 'var(--gold-100)',
    borderColor: 'var(--gold-300)'
  },
  accent: {
    background: 'var(--gold-600)',
    borderColor: 'var(--gold-600)'
  },
  onDark: {
    background: 'var(--gold-100)',
    borderColor: 'var(--gold-100)'
  },
  onDarkOutline: {
    background: 'rgba(247,245,242,.12)',
    borderColor: 'rgba(247,245,242,.72)'
  },
  ghost: {
    color: 'var(--accent)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  as,
  href,
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...(press && !disabled ? {
      transform: 'scale(var(--press-scale))'
    } : null),
    ...(disabled ? {
      opacity: .42,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size];
  const tone = {
    ghost: {
      background: hover ? 'var(--gold-100)' : 'transparent',
      color: 'var(--brand)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--gold-100)' : 'transparent',
      color: 'var(--brand)',
      border: '1px solid var(--border)'
    },
    onDark: {
      background: hover ? 'rgba(247,245,242,.12)' : 'transparent',
      color: 'var(--gold-50)',
      border: '1px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      padding: 0,
      transition: 'background-color var(--dur-base) var(--ease-out)',
      ...tone,
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  const tones = {
    accent: {
      background: 'var(--accent)',
      color: 'var(--blue-950)'
    },
    navy: {
      background: 'var(--brand)',
      color: 'var(--gold-50)'
    },
    paper: {
      background: 'var(--gold-50)',
      color: 'var(--brand)',
      boxShadow: 'inset 0 0 0 1px var(--border)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      padding: '5px 9px',
      borderRadius: 'var(--radius-xs)',
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  image,
  imageAlt = '',
  category,
  name,
  price,
  badge,
  onAdd,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-card)' : 'var(--shadow-whisper)',
      transform: hover ? 'translateY(var(--hover-lift))' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: 'var(--gold-50)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(var(--image-hover-scale))' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : null, badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '12px',
      left: '12px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      flex: 1
    }
  }, category ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-xs-size)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, category) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 400,
      fontSize: 'var(--display-5-size)',
      lineHeight: 'var(--display-5-lh)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-size)',
      color: 'var(--text-body)'
    }
  }, price), onAdd ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    onClick: onAdd
  }, "Add") : null)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/content/EyebrowLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EyebrowLabel({
  children,
  tone = 'accent',
  as: Tag = 'p',
  align = 'left',
  style,
  ...rest
}) {
  const color = {
    accent: 'var(--text-accent)',
    onDark: 'var(--text-accent-on-dark)',
    muted: 'var(--text-muted)'
  }[tone];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      fontWeight: 'var(--eyebrow-weight)',
      letterSpacing: 'var(--eyebrow-tracking)',
      textTransform: 'uppercase',
      color,
      margin: 0,
      textAlign: align,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { EyebrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EyebrowLabel.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  tone = 'light',
  level = 2,
  style
}) {
  const Tag = 'h' + level;
  const dark = tone === 'dark';
  const sizeVar = level <= 2 ? 'var(--display-2-size)' : 'var(--display-3-size)';
  const lhVar = level <= 2 ? 'var(--display-2-lh)' : 'var(--display-3-lh)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: align === 'center' ? 'center' : 'flex-end',
      justifyContent: 'space-between',
      gap: '32px',
      flexDirection: align === 'center' ? 'column' : 'row',
      textAlign: align === 'center' ? 'center' : 'left',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: align === 'center' ? '100%' : undefined,
      maxWidth: align === 'center' ? 'var(--measure-prose)' : '760px'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.EyebrowLabel, {
    tone: dark ? 'onDark' : 'accent',
    align: align === 'center' ? 'center' : 'left',
    style: {
      marginBottom: '16px'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 400,
      fontSize: sizeVar,
      lineHeight: lhVar,
      letterSpacing: 'var(--display-tracking)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-lh)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      margin: '16px 0 0',
      maxWidth: '640px',
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined
    }
  }, description) : null), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      paddingBottom: '6px'
    }
  }, action) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = 'paper',
  size = 'md',
  style,
  ...rest
}) {
  const tones = {
    paper: {
      background: 'var(--gold-50)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)'
    },
    onDark: {
      background: 'rgba(247,245,242,.06)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--border-on-dark)'
    },
    accent: {
      background: 'var(--gold-100)',
      color: 'var(--gold-700)',
      border: '1px solid var(--gold-200)'
    }
  };
  const dims = size === 'sm' ? {
    fontSize: '11px',
    padding: '5px 10px'
  } : {
    fontSize: '13px',
    padding: '8px 16px'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 450,
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      ...dims,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  tone = 'light',
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const dark = tone === 'dark';
  const inputId = id || rest.name || undefined;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      fontWeight: 500,
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-size)',
      height: '48px',
      padding: '0 16px',
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      width: '100%',
      background: dark ? 'rgba(247,245,242,.06)' : 'var(--surface-card)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-body)',
      border: '1px solid ' + (error ? 'var(--gold-700)' : focus ? 'var(--focus-ring)' : dark ? 'var(--border-on-dark)' : 'var(--border)'),
      boxShadow: focus ? '0 0 0 3px rgba(198,160,108,.22)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-xs-size)',
      color: error ? 'var(--gold-700)' : dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Newsletter.jsx
try { (() => {
function Newsletter({
  title = 'Subscribe to Seasonal Dispatches',
  description = 'Recieve recipes, partner crop-reports, and first access to seasonal small-batch releases.',
  placeholder = 'Enter your email',
  cta = 'Subscribe',
  tone = 'dark',
  onSubmit,
  style
}) {
  const [value, setValue] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 'var(--measure-prose)',
      margin: '0 auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 400,
      fontSize: 'var(--display-3-size)',
      lineHeight: 'var(--display-3-lh)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-size)',
      lineHeight: 'var(--body-lh)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      margin: '16px auto 32px',
      maxWidth: '560px'
    }
  }, description), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      onSubmit && onSubmit(value);
    },
    style: {
      display: 'flex',
      gap: '12px',
      maxWidth: '520px',
      margin: '0 auto',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    tone: tone,
    name: "email",
    type: "email",
    placeholder: placeholder,
    value: value,
    onChange: e => setValue(e.target.value),
    "aria-label": "Email"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: dark ? 'accent' : 'primary',
    style: {
      height: '48px',
      flexShrink: 0
    }
  }, sent ? 'Subscribed' : cta)));
}
Object.assign(__ds_scope, { Newsletter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Newsletter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cafe.jsx
try { (() => {
const {
  Button,
  EyebrowLabel
} = window.LDS;
function Cafe({
  onReserve
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--section-y) 40px',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '560px'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "onDark",
    style: {
      marginBottom: '20px'
    }
  }, "Introducing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 400,
      fontSize: 'var(--display-2-size)',
      lineHeight: 'var(--display-2-lh)',
      margin: 0,
      color: 'var(--text-on-dark)'
    }
  }, "Lambruk Pantry Cafe"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-lh)',
      color: 'var(--text-on-dark-muted)',
      margin: '22px 0 34px'
    }
  }, "Join us in the heart of Ballina for seasonal brunches, handcrafted pantry tasting experiences and country hospitality inspired by the produce of the Northern Rivers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '14px',
      marginBottom: '38px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)'
    }
  }, [['map-pin', '12 Southern Cross Drive, Ballina NSW 2478'], ['clock', 'Monday – Wednesday: 8:00 AM – 3:30 PM'], ['clock', 'Thursday – Sunday: 8:00 AM – 3:30 PM']].map(([ic, txt], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", null, txt)))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onReserve
  }, "Reserve a table"))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '620px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/cafe-exterior.png",
    alt: "Lambruk Pantry Cafe at dusk",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))));
}
Object.assign(window, {
  Cafe
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cafe.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartDrawer.jsx
try { (() => {
const {
  Button,
  EyebrowLabel
} = window.LDS;
function CartDrawer({
  open,
  items,
  onClose,
  onRemove
}) {
  const total = items.reduce((s, i) => s + i.qty * parseFloat(String(i.price).replace('$', '')), 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--scrim)',
      zIndex: 40,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: '420px',
      zIndex: 41,
      background: 'var(--paper)',
      borderLeft: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    style: {
      marginBottom: '8px'
    }
  }, "Your Basket"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: '28px',
      color: 'var(--text-strong)'
    }
  }, items.length ? items.length + (items.length === 1 ? ' item' : ' items') : 'Empty')), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 28px'
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--text-muted)',
      marginTop: '32px'
    }
  }, "Nothing here yet. Add something from the Seasonal Spotlight.") : items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: 'flex',
      gap: '16px',
      padding: '20px 0',
      borderBottom: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: i.image,
    alt: "",
    style: {
      width: '68px',
      height: '68px',
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: '18px',
      color: 'var(--text-strong)',
      lineHeight: 1.2
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'var(--text-muted)',
      marginTop: '6px'
    }
  }, i.qty, " \xD7 ", i.price)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(i.id),
    "aria-label": "Remove",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "trash-2"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--text-body)',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "$", total.toFixed(2))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: items.length === 0
  }, "Checkout"))));
}
Object.assign(window, {
  CartDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Categories.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  SectionHeading
} = window.LDS;
const CATEGORIES = [{
  name: 'Tea Collection',
  image: '../../assets/images/category-tea-collection.png'
}, {
  name: 'Sauces & Chutney',
  image: '../../assets/images/category-sauces-chutney.png'
}, {
  name: 'Pantry Staples',
  image: '../../assets/images/category-pantry-staples.png'
}];
function CategoryTile({
  name,
  image,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick(name);
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      background: 'var(--surface-card)',
      boxShadow: h ? 'var(--shadow-card)' : 'var(--shadow-whisper)',
      transform: h ? 'translateY(var(--hover-lift))' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: h ? 'scale(var(--image-hover-scale))' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--display-5-size)',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      color: 'var(--accent)'
    }
  })));
}
function Categories({
  onCategory
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 40px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Explore by category",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "arrow-right"
      })
    }, "Shop all"),
    style: {
      marginBottom: '44px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '28px'
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryTile, _extends({
    key: c.name
  }, c, {
    onClick: onCategory
  }))))));
}
Object.assign(window, {
  Categories
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Categories.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  Newsletter,
  IconButton
} = window.LDS;
const COLUMNS = [{
  title: 'Shop',
  links: ['All Products', 'Preserves', 'Spices', 'Oils & Vinegars', 'Gift Boxes']
}, {
  title: 'Explore',
  links: ['Our Story', 'Farm Partners', 'Recipes', 'Wholesale']
}];
function Footer({
  onSubscribe
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-darker)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-on-dark)',
      padding: 'var(--section-y) 40px'
    }
  }, /*#__PURE__*/React.createElement(Newsletter, {
    onSubmit: onSubscribe
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 40px',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr',
      gap: '64px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lambruk-logo-white.svg",
    alt: "Lambruk Pantry",
    style: {
      height: '42px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      lineHeight: 1.7,
      color: 'var(--text-on-dark-muted)',
      margin: '24px 0 26px',
      maxWidth: '400px'
    }
  }, "Sourced deep from Australian soil. We curate life-affirming kitchen essentials made by small-batch farmers and passionate artisans."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px'
    }
  }, ['instagram', 'facebook', 'mail'].map(n => /*#__PURE__*/React.createElement(IconButton, {
    key: n,
    variant: "onDark",
    label: n,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": n
    })
  })))), COLUMNS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-accent-on-dark)',
      marginBottom: '22px'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '13px'
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: '14px',
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--gold-400)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-on-dark-muted)'
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '26px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '24px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-xs-size)',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Lambruk Pantry. Proudly based on Wurundjeri Country."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '26px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Terms of Service")))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Button,
  IconButton
} = window.LDS;
function Header({
  cartCount,
  onCart,
  onNav,
  active
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('page');
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 24);
    (el || window).addEventListener('scroll', fn);
    return () => (el || window).removeEventListener('scroll', fn);
  }, []);
  const links = ['Shop', 'Wholesale', 'Cafe', 'Our Story', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: scrolled ? 'rgba(251,250,247,.86)' : 'var(--paper)',
      backdropFilter: scrolled ? 'var(--blur-header)' : 'none',
      borderBottom: '1px solid ' + (scrolled ? 'var(--border)' : 'transparent'),
      transition: 'background-color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 40px',
      height: '88px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Home');
    },
    style: {
      display: 'flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lambruk-logo-blue.svg",
    alt: "Lambruk Pantry",
    style: {
      height: '40px'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '34px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l);
    },
    style: {
      fontSize: '14px',
      color: active === l ? 'var(--text-accent)' : 'var(--text-body)',
      textDecoration: 'none',
      transition: 'color var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-accent)',
    onMouseLeave: e => e.currentTarget.style.color = active === l ? 'var(--text-accent)' : 'var(--text-body)'
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search"
    })
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Account",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "user"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Cart",
    onClick: onCart,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "shopping-bag"
    })
  }), cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-2px',
      right: '-2px',
      minWidth: '18px',
      height: '18px',
      borderRadius: '999px',
      background: 'var(--accent)',
      color: 'var(--blue-950)',
      fontSize: '10px',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px'
    }
  }, cartCount) : null))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  EyebrowLabel,
  Tag
} = window.LDS;
function Hero({
  onShop,
  onCafe
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '640px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/hero-cheeseboard.png",
    alt: "Lambruk mango chutney on a cheese board",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(13,16,36,.72) 0%, rgba(13,16,36,.52) 46%, rgba(13,16,36,.18) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 40px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '620px'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "onDark",
    style: {
      marginBottom: '22px'
    }
  }, "Multi Award Winning"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 400,
      fontSize: 'var(--display-1-size)',
      lineHeight: 'var(--display-1-lh)',
      letterSpacing: 'var(--display-tracking)',
      color: 'var(--text-on-dark)',
      margin: 0
    }
  }, "Handcrafted pantry essentials", /*#__PURE__*/React.createElement("br", null), "from the Northern Rivers"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-lh)',
      color: 'rgba(247,245,242,.82)',
      margin: '24px 0 36px',
      maxWidth: '540px'
    }
  }, "Discover handcrafted teas, sauces, chutneys, olive oils and gourmet pantry favourites made with Australian-grown ingredients, real fruit and direct partnerships with local farmers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: onShop
  }, "Shop Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDarkOutline",
    size: "lg",
    onClick: onCafe
  }, "Visit Our Cafe")))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/award-melbourne-royal-bronze-2024.png",
    alt: "Melbourne Royal 2024 Australian Food Awards Bronze",
    style: {
      position: 'absolute',
      right: '56px',
      bottom: '56px',
      width: '112px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      borderTop: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '20px 40px',
      display: 'flex',
      gap: '12px',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, ['Low FODMAP', 'Gluten-Free', 'Glyphosate-Free', 'No Artificial Sweeteners', 'Top 9 Allergen-Free'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "onDark",
    size: "sm"
  }, t)))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Occasions.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading
} = window.LDS;
const OCCASIONS = [{
  name: 'Slow Mornings',
  copy: 'Everything you need for the perfect breakfast.',
  image: '../../assets/images/occasion-slow-mornings.png'
}, {
  name: 'Entertaining',
  copy: 'The perfect companions for cheese boards and shared tables.',
  image: '../../assets/images/occasion-entertaining.png'
}, {
  name: 'Sunday Roast',
  copy: 'Bring richer flavour to every family gathering.',
  image: '../../assets/images/occasion-sunday-roast.png'
}, {
  name: 'High Tea',
  copy: 'French-inspired elegance.',
  image: '../../assets/images/occasion-high-tea.png'
}];
function OccasionCard({
  name,
  copy,
  image
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'block',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      textDecoration: 'none',
      aspectRatio: '3 / 4'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(var(--image-hover-scale))' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(13,16,36,0) 28%, rgba(13,16,36,.46) 56%, rgba(13,16,36,.86) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: '28px',
      color: 'var(--gold-50)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      lineHeight: 1.5,
      color: 'rgba(247,245,242,.78)',
      marginTop: '8px'
    }
  }, copy)));
}
function Occasions() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 40px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Curated Occasions",
    title: "Curated for every occasion",
    align: "center",
    style: {
      marginBottom: '52px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '24px'
    }
  }, OCCASIONS.map(o => /*#__PURE__*/React.createElement(OccasionCard, _extends({
    key: o.name
  }, o))))));
}
Object.assign(window, {
  Occasions
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Occasions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Promise.jsx
try { (() => {
const {
  EyebrowLabel
} = window.LDS;
function Promise_({}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper-2)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '72px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/category-sauces-chutney.png",
    alt: "Lambruk preserves on a board",
    style: {
      width: '100%',
      display: 'block',
      aspectRatio: '4 / 5',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    style: {
      marginBottom: '20px'
    }
  }, "The Lambruk Promise"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 400,
      fontSize: 'var(--display-2-size)',
      lineHeight: 'var(--display-2-lh)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Made with real fruit and ", /*#__PURE__*/React.createElement("em", null, "Australian ingredients"), " \u2014 and partnerships with the farmers who grow them"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      display: 'grid',
      gap: '0',
      borderTop: '1px solid var(--border)'
    }
  }, [['Real fruit, always', 'No concentrates, no shortcuts. Fruit goes into the pan whole.'], ['Small batch', 'Every batch is crafted in small quantities and made with less sugar.'], ['Direct partnerships', 'We buy from the Northern Rivers growers we know by name.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: '22px 0',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-size)',
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      color: 'var(--text-muted)',
      marginTop: '6px'
    }
  }, d)))))));
}
Object.assign(window, {
  Promise_
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Promise.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Spotlight.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  SectionHeading,
  ProductCard
} = window.LDS;
const PRODUCTS = [{
  id: 'marmalade',
  category: 'Preserves',
  name: 'Blood Orange & Rosemary Marmalade',
  price: '$18.00',
  image: '../../assets/images/product-marmalade.png',
  badge: 'New'
}, {
  id: 'oliveoil',
  category: 'Oils',
  name: 'Pressed Wild Olive Oil',
  price: '$34.00',
  image: '../../assets/images/product-olive-oil.png'
}, {
  id: 'pepper',
  category: 'Spices',
  name: 'Native Bush Pepper Blend',
  price: '$16.00',
  image: '../../assets/images/product-native-pepper.png'
}, {
  id: 'honey',
  category: 'Honey',
  name: 'Raw Blue Gum Honey',
  price: '$22.00',
  image: '../../assets/images/product-honey.png'
}, {
  id: 'salted',
  category: 'Condiments',
  name: 'Salted Peach & Terroir Mustard',
  price: '$19.00',
  image: '../../assets/images/product-salted-terroir.png'
}];
function Spotlight({
  onAdd
}) {
  const railRef = React.useRef(null);
  const scrollBy = dx => railRef.current && railRef.current.scrollBy({
    left: dx,
    behavior: 'smooth'
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 40px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "New Releases",
    title: "The Seasonal Spotlight",
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => scrollBy(-360),
      "aria-label": "Previous"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-left"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => scrollBy(360),
      "aria-label": "Next"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-right"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "arrow-right"
      })
    }, "Shop all")),
    style: {
      marginBottom: '44px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    style: {
      display: 'flex',
      gap: '24px',
      overflowX: 'auto',
      padding: '6px 40px 20px',
      scrollSnapType: 'x mandatory',
      scrollPaddingLeft: '40px',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      scrollbarWidth: 'none'
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      flex: '0 0 288px',
      scrollSnapAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, _extends({}, p, {
    onAdd: () => onAdd(p)
  }))))));
}
Object.assign(window, {
  Spotlight,
  PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Spotlight.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Wholesale.jsx
try { (() => {
const {
  Button
} = window.LDS;
function Wholesale({
  onStockist,
  onHighTea
}) {
  const panel = {
    position: 'relative',
    minHeight: '480px',
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden'
  };
  const scrim = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(13,16,36,0) 28%, rgba(13,16,36,.46) 56%, rgba(13,16,36,.86) 100%)'
  };
  const inner = {
    position: 'relative',
    padding: '46px',
    maxWidth: '520px'
  };
  const h = {
    fontFamily: 'var(--font-serif-display)',
    fontWeight: 400,
    fontSize: 'var(--display-3-size)',
    lineHeight: 'var(--display-3-lh)',
    color: 'var(--gold-50)',
    margin: 0
  };
  const p = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--body-size)',
    lineHeight: 'var(--body-lh)',
    color: 'rgba(247,245,242,.80)',
    margin: '16px 0 28px'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: panel
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/storefront-high-tea.png",
    alt: "Lambruk Pantry storefront",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: scrim
  }), /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement("h2", {
    style: h
  }, "Wholesale partnerships"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "Bring handcrafted pantry products to your caf\xE9, restaurant, hotel or retail store with flexible wholesale options and products your customers will come back for."), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    onClick: onStockist
  }, "Become a Stockist"))), /*#__PURE__*/React.createElement("div", {
    style: panel
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/high-tea-stand.png",
    alt: "High tea stand",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: scrim
  }), /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement("h2", {
    style: h
  }, "A high tea worth travelling for"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "Enjoy handcrafted pastries, locally sourced ingredients and our signature teas in an experience inspired by country hospitality."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: onHighTea
  }, "View High Tea"))));
}
Object.assign(window, {
  Wholesale
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Wholesale.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhyLambruk.jsx
try { (() => {
const {
  EyebrowLabel
} = window.LDS;
function WhyLambruk() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper-2)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-prose)',
      margin: '0 auto',
      padding: '0 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    align: "center",
    style: {
      marginBottom: '26px'
    }
  }, "Why Lambruk"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 400,
      fontSize: 'var(--display-2-size)',
      lineHeight: 1.22,
      letterSpacing: 'var(--display-tracking)',
      color: 'var(--text-strong)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Every batch is crafted in small quantities and made with ", /*#__PURE__*/React.createElement("em", null, "less sugar"), " for a more honest pantry.")));
}
Object.assign(window, {
  WhyLambruk
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhyLambruk.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.EyebrowLabel = __ds_scope.EyebrowLabel;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Newsletter = __ds_scope.Newsletter;

})();

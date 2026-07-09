// suzen-api · Express HTTP wrapper around suzen-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'suzen', version: '1.0.0' }));

app.post('/setStatus', async (req, res) => {
  try {
    const { setStatus } = await import('@ai-native-solutions/suzen-sdk');
    const out = typeof setStatus === 'function' ? await setStatus(req.body) : { error: 'setStatus not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/fetchJson', async (req, res) => {
  try {
    const { fetchJson } = await import('@ai-native-solutions/suzen-sdk');
    const out = typeof fetchJson === 'function' ? await fetchJson(req.body) : { error: 'fetchJson not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/fetchText', async (req, res) => {
  try {
    const { fetchText } = await import('@ai-native-solutions/suzen-sdk');
    const out = typeof fetchText === 'function' ? await fetchText(req.body) : { error: 'fetchText not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/normUrl', async (req, res) => {
  try {
    const { normUrl } = await import('@ai-native-solutions/suzen-sdk');
    const out = typeof normUrl === 'function' ? await normUrl(req.body) : { error: 'normUrl not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/reading', async (req, res) => {
  try {
    const { reading } = await import('@ai-native-solutions/suzen-sdk');
    const out = typeof reading === 'function' ? await reading(req.body) : { error: 'reading not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/ask', async (req, res) => {
  try {
    const { ask } = await import('@ai-native-solutions/suzen-sdk');
    const out = typeof ask === 'function' ? await ask(req.body) : { error: 'ask not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('suzen-api listening on :' + PORT));

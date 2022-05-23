namespace WebView2Tester
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Data;
    using System.Drawing;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows.Forms;






    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }


        protected override void OnLoad(EventArgs tea)
        {
            base.OnLoad(tea);

            webView21.Source = new Uri("https://gist.github.com/avazak/e893b6c3811b84347ba68f7457007207");

        }

    }


}

<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class MainForm
    Inherits System.Windows.Forms.Form

    'Form은 Dispose를 재정의하여 구성 요소 목록을 정리합니다.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Windows Form 디자이너에 필요합니다.
    Private components As System.ComponentModel.IContainer

    '참고: 다음 프로시저는 Windows Form 디자이너에 필요합니다.
    '수정하려면 Windows Form 디자이너를 사용하십시오.  
    '코드 편집기에서는 수정하지 마세요.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(MainForm))
        Me.WebView21 = New Microsoft.Web.WebView2.WinForms.WebView2()
        Me._btnFunc = New System.Windows.Forms.Button()
        Me._txbEnter = New System.Windows.Forms.TextBox()
        Me._btnEnter = New System.Windows.Forms.Button()
        CType(Me.WebView21, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'WebView21
        '
        Me.WebView21.AllowExternalDrop = True
        Me.WebView21.Anchor = CType((((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Bottom) _
            Or System.Windows.Forms.AnchorStyles.Left) _
            Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.WebView21.CreationProperties = Nothing
        Me.WebView21.DefaultBackgroundColor = System.Drawing.Color.White
        Me.WebView21.Location = New System.Drawing.Point(12, 12)
        Me.WebView21.Name = "WebView21"
        Me.WebView21.Size = New System.Drawing.Size(776, 530)
        Me.WebView21.TabIndex = 0
        Me.WebView21.ZoomFactor = 1.0R
        '
        '_btnFunc
        '
        Me._btnFunc.Anchor = CType((System.Windows.Forms.AnchorStyles.Bottom Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me._btnFunc.BackColor = System.Drawing.Color.Olive
        Me._btnFunc.Cursor = System.Windows.Forms.Cursors.Hand
        Me._btnFunc.Location = New System.Drawing.Point(708, 548)
        Me._btnFunc.Name = "_btnFunc"
        Me._btnFunc.Size = New System.Drawing.Size(80, 40)
        Me._btnFunc.TabIndex = 1
        Me._btnFunc.Text = "기능"
        Me._btnFunc.UseVisualStyleBackColor = False
        '
        '_txbEnter
        '
        Me._txbEnter.Anchor = CType(((System.Windows.Forms.AnchorStyles.Bottom Or System.Windows.Forms.AnchorStyles.Left) _
            Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me._txbEnter.BackColor = System.Drawing.SystemColors.ActiveCaptionText
        Me._txbEnter.ForeColor = System.Drawing.SystemColors.ScrollBar
        Me._txbEnter.Location = New System.Drawing.Point(12, 558)
        Me._txbEnter.Name = "_txbEnter"
        Me._txbEnter.Size = New System.Drawing.Size(634, 23)
        Me._txbEnter.TabIndex = 2
        Me._txbEnter.Text = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        '
        '_btnEnter
        '
        Me._btnEnter.Anchor = CType((System.Windows.Forms.AnchorStyles.Bottom Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me._btnEnter.Cursor = System.Windows.Forms.Cursors.Hand
        Me._btnEnter.Location = New System.Drawing.Point(652, 558)
        Me._btnEnter.Name = "_btnEnter"
        Me._btnEnter.Size = New System.Drawing.Size(50, 23)
        Me._btnEnter.TabIndex = 3
        Me._btnEnter.Text = "Go"
        Me._btnEnter.UseVisualStyleBackColor = True
        '
        'MainForm
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.Black
        Me.ClientSize = New System.Drawing.Size(800, 600)
        Me.Controls.Add(Me._btnEnter)
        Me.Controls.Add(Me._txbEnter)
        Me.Controls.Add(Me._btnFunc)
        Me.Controls.Add(Me.WebView21)
        Me.Font = New System.Drawing.Font("맑은 고딕", 9.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(129, Byte))
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Location = New System.Drawing.Point(100, 40)
        Me.Margin = New System.Windows.Forms.Padding(3, 4, 3, 4)
        Me.Name = "MainForm"
        Me.SizeGripStyle = System.Windows.Forms.SizeGripStyle.Show
        Me.StartPosition = System.Windows.Forms.FormStartPosition.Manual
        Me.Text = "Form1"
        CType(Me.WebView21, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents WebView21 As Microsoft.Web.WebView2.WinForms.WebView2
    Friend WithEvents _btnFunc As System.Windows.Forms.Button
    Friend WithEvents _txbEnter As System.Windows.Forms.TextBox
    Friend WithEvents _btnEnter As System.Windows.Forms.Button
End Class
